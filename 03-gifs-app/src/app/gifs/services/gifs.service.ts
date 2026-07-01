import {computed, effect, inject, Injectable, signal }from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GiphyResponse } from '../intefaces/giphy.interface';
import { Gif } from '../intefaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'gifsHistory';

const loadFromLocalStorage = () => {
    const history = localStorage.getItem(GIF_KEY) ?? '{}';
    const gifs = JSON.parse(history) as Record<string, Gif[]>;
    console.log("loadFromLocalStorage", gifs);
    return gifs;
}

// {
//     'goku': [gif1, gif2, gif3],
//     'naruto': [gif4, gif5, gif6],
//     'one piece': [gif7, gif8, gif9],
// }

// Record<string, Gif[]> ;

@Injectable({providedIn: 'root'})
export class GifsService {
  
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal<boolean>(false);

    searhHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searhHistoryKeys = computed(() => Object.keys(this.searhHistory()));

    constructor() { 
        console.log("GifsService constructor called");
        this.loadTerndignGifs();
    }


    saveGifsToLocalStorage = effect(() => {
        const history = JSON.stringify( this.searhHistory());
        localStorage.setItem(GIF_KEY, history);
    });



    loadTerndignGifs() {

        console.log("voy a hacer la peticion http");

        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
            params: {
                api_key: environment.giphyApikey,
                limit: 20
            }
        }).subscribe( (resp) => {
            const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(resp.data);
            // Actualizar la señal trendingGifs con los gifs obtenidos
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
            console.log("gifs cargados", this.trendingGifs());
        } );
    }


    searchGifs(query: string) : Observable<Gif[]> {

        console.log("voy a hacer la peticion http filtrada por query", query);

        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
            params: {
                api_key: environment.giphyApikey,
                limit: 20,
                q: query,
            }
        }).pipe(

            map(({data}) => data),
            map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

            //TODO: Historial

            tap( (items) => { 

                this.searhHistory.update( (history) => ({
                    ...history,
                    [query.toLowerCase()]: items
                }))

            })

        );

            // tap((resp) => {
            //     const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(resp.data);
            //     console.log("gifs search", gifs);
            // })

        //);

        // .subscribe( (resp) => {
        //     const gifs: Gif[] = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     console.log("gifs search", gifs);
            
        // } );
    }


    getHistoryGifs(query: string): Gif[] {
        return this.searhHistory()[query] ?? [];
    }
}
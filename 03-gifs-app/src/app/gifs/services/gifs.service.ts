import { HttpClient } from '@angular/common/http';
import {inject, Injectable, signal }from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GiphyResponse } from '../intefaces/giphy.interface';
import { Gif } from '../intefaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifsService {
  
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal<boolean>(false);

    constructor() { 
        console.log("GifsService constructor called");
        this.loadTerndignGifs();
    }

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


    searchGifs(query: string)  {

        console.log("voy a hacer la peticion http filtrada por query", query);

        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
            params: {
                api_key: environment.giphyApikey,
                limit: 20,
                q: query,
            }
        }).pipe(

            map(({data}) => data),
            map((items) => GifMapper.mapGiphyItemsToGifArray(items))

            //TODO: Historial

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
}

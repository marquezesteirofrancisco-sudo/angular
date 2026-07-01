import { HttpClient } from '@angular/common/http';
import {inject, Injectable, signal }from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GiphyResponse } from '../intefaces/giphy.interface';
import { Gif } from '../intefaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

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
}

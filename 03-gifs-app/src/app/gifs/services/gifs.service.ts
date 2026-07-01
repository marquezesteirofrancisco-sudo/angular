import { HttpClient } from '@angular/common/http';
import {inject, Injectable }from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GiphyResponse } from '../intefaces/giphy.interface';

@Injectable({providedIn: 'root'})
export class GifsService {
  
    private http = inject(HttpClient);

    constructor() { 
        this.loadTerndignGifs
    }

    loadTerndignGifs() {

        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
            params: {
                api_key: environment.giphyApikey,
                limit: 20
            }
        });

    }
}

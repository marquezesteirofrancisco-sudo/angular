import {  Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../intefaces/gif.interface';
@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

   // Inyectar el servicio de GifsService
  gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);


  onSearch(query: string) {
    this.gifsService.searchGifs(query).subscribe((resp) => {

      this.gifs.set(resp);
      
      
    });

  }

}

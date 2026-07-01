import {  Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'gif-history',
  imports: [],
  templateUrl: './gif-history.html',
})
export default class GifHistory 
{

  // query = inject(ActivatedRoute).params.subscribe( (params) => {
  //   console.log("params", params['query']);
  // } );

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map( (params) => params['query'] ?? 'No query' )
    )
  );

}

import { Component, signal } from '@angular/core';


interface Character {
  id:number;
  name:string;
  power:number
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.html',
  styles: ``,
})
export class DragonballPage {

  characteres = signal<Character[]> ([
    {
      id : 1,
      name : 'Goku',
      power : 9001
    },
    
    {
      id : 2,
      name : 'Vegeta',
      power : 9002
    },

    {
      id : 3,
      name : 'Piccolo',
      power : 9003
    },

  ]);


}

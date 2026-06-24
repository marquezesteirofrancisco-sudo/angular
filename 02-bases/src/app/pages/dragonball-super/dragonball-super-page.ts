import { Component, signal } from '@angular/core';

interface Character {
  id:number;
  name:string;
  power:number
}

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dagronball-super'
})


export class DragonballSuperPage {

  name = signal('');
  power = signal(0);

  characteres = signal<Character[]> ([
    {id : 1,name : 'Goku',power : 9001},
    {id : 2,name : 'Vegeta',power : 9000}
  ]);


  addCharacter() {

    if ( !this.name() || !this.power() ||  this.power() < 0)
      return;

    const newCharacter: Character =  {
        id : this.characteres().length + 1,
        name : this.name(),
        power : this.power()
    }

    this.characteres.update((list) => [...list, newCharacter])  ;

    this.resetField();

    console.log( this.name(), this.power());
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }


/*   powerClasses = computed(() => {

      return {
          'text-danger':true,
      }

  } ) */


}

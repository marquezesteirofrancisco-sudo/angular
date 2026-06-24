import { Component, signal } from '@angular/core';
import { CharacterList }          from '../../componets/dragonball/character-list/character-list';
import { DragonballCharacterAdd } from '../../componets/dragonball/character-add/character-add';

interface Character {
  id:number;
  name:string;
  power:number
}

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dagronball-super',
  imports: [CharacterList, DragonballCharacterAdd]
})


export class DragonballSuperPage {
 
  name = signal('');
  power = signal(0);

  characters = signal<Character[]> ([
    {id : 1,name : 'Goku',power : 9001},
    {id : 2,name : 'Vegeta',power : 9000}
  ]);


  addCharacter(character: Character) {

    this.characters.update (

      (list) =>  [...list, character]
    )

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

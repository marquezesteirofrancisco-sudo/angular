import {  Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {

    name = signal('');
    power = signal(0);
  
    charactersParam = input.required<Character[]>();

    addCharacter() {

      if ( !this.name() || !this.power() ||  this.power() < 0)
        return;

      const newCharacter: Character =  {
          id : this.charactersParam().length + 1,
          name : this.name(),
          power : this.power()
      }

      //this.charactersParam.update((list) => [...list, newCharacter])  ;
      this.charactersParam().push(newCharacter); // .update((list) => [...list, newCharacter])  ;

      this.resetField();

      console.log( this.name(), this.power());
    }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }

}

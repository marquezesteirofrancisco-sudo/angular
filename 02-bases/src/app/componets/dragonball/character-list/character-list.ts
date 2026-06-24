import { Component, input } from '@angular/core';
import type {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})

export class CharacterList {

  listadoPersonajesParam = input.required<string>();
  charactersParam = input.required<Character[]>();
  
}

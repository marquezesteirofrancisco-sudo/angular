import { Component, inject, signal } from '@angular/core';
import { CharacterList }          from '../../componets/dragonball/character-list/character-list';
import { DragonballCharacterAdd } from '../../componets/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

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

  public dragonballService = inject(DragonballService)
 
}

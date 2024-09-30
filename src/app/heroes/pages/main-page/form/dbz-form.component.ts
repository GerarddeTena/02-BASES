import {Component, EventEmitter, Output} from '@angular/core';
import {Character, DBZ_CHARACTER} from "../../../interfaces/models";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-form',
  templateUrl: './dbz-form.component.html'
})

export class DbzFormComponent {

  public character!: DBZ_CHARACTER;
  @Output() onAddCharacter: EventEmitter<DBZ_CHARACTER> = new EventEmitter();


  constructor() {
    this.character = {
      id: uuid(),
      name: '',
      killi: 0
    }
  }


addCharacter(character: DBZ_CHARACTER) {
  if (character.name.trim().length === 0) {
    return;
  }

  this.onAddCharacter.emit(character);
  this.character = new Character('', 0, '');
}
}

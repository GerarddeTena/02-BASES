import {Injectable} from "@angular/core";
import {v4 as uuid} from 'uuid';

import {DBZ_CHARACTER} from "../interfaces/models";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  characters: DBZ_CHARACTER[] = [];

  constructor() {
    this.characters = [
      {
        id: uuid(),
        name: 'Goku',
        killi: 10000
      }
    ];
  }

  get DbzCharacters() {
    return this.characters;
  }

  emitCharacter(character: DBZ_CHARACTER): void {
    console.log(character);
  }

  onAddCharacter(character: DBZ_CHARACTER) {
    this.characters.push({...character, id: uuid()});
  }

  deleteCharacter(id: string) {
    this.characters = this.characters.filter(char => id !== char.id);
  }

}

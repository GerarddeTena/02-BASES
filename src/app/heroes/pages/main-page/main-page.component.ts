import {Component, OnInit} from '@angular/core';

import {DbzService} from "../../services/dbz.service";
import {DBZ_CHARACTER} from "../../interfaces/models";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  characters: DBZ_CHARACTER[] = [];
  charactersOnStorage: DBZ_CHARACTER[] = [];

  constructor(protected readonly dbzService: DbzService) {
  }

  ngOnInit() {
    this.characters = this.dbzService.DbzCharacters;
  }

  onAddCharacter(character: DBZ_CHARACTER): void {
    this.dbzService.onAddCharacter(character);
    this.dbzService.DbzCharacters;
    console.log(this.characters);
  }

  deleteCharacterById(id: string) {
    this.dbzService.deleteCharacter(id);
    this.characters = this.dbzService.DbzCharacters;
  }



}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DBZ_CHARACTER} from "../../../interfaces/models";

@Component({
  selector: 'dbz-table',
  templateUrl: './dbz-table.component.html'
})

export class DbzTableComponent {

  @Input() characters: DBZ_CHARACTER[] = [];
  @Output() deleteCharacter: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id: string): void {
    id ? this.deleteCharacter.emit(id) : undefined;
  }

}

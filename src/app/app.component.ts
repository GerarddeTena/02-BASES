import { Component } from '@angular/core';
import {DbzModule} from "./heroes/dbz.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    DbzModule,
    RouterOutlet
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
}

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {MainPageComponent} from './pages/main-page/main-page.component';
import {DbzFormComponent} from './pages/main-page/form/dbz-form.component';
import {DbzTableComponent} from './pages/main-page/table/dbz-table.component';
import {JsonPipe, NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    MainPageComponent,
    DbzFormComponent,
    DbzTableComponent
  ],
  exports: [
    MainPageComponent
  ],
    imports: [
        FormsModule,
        JsonPipe,
        NgForOf
    ],
  providers: []
})

export class DbzModule {
}

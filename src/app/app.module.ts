import {NgModule} from "@angular/core";
import {DbzModule} from "./heroes/dbz.module";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    DbzModule
  ],
  providers: []
})

export class AppModule {

}

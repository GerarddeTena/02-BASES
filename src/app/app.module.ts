import {NgModule} from "@angular/core";
import {DbzModule} from "./heroes/dbz.module";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [

  ],
  exports: [],
  imports: [
    DbzModule,
    AppComponent
  ],
  providers: []
})

export class AppModule {

}

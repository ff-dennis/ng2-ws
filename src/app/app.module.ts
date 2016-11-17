// System Modules
import { NgModule }           from '@angular/core'
import { BrowserModule }      from "@angular/platform-browser";

// Application Components
import { AppComponent }       from "./app";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {

}

// System Modules
import { NgModule }           from '@angular/core'
import { BrowserModule }      from "@angular/platform-browser";

// Routing
import { RouterModule} from '@angular/router'
import {rootRouterConfig} from './app.routes';

// Application Components
import { AppComponent }       from "./app";

import { AgendaComponent} from './../agenda/agenda.component'
import { NavbarComponent} from './../navbar/navbar.component'
import { UsersOverviewComponent} from './../users/users-overview.component'


@NgModule({
  declarations: [AppComponent,AgendaComponent, NavbarComponent, UsersOverviewComponent],
  imports: [BrowserModule,  RouterModule.forRoot(rootRouterConfig)],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {

}

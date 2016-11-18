// System Modules
import { NgModule }           from '@angular/core'
import { BrowserModule }      from "@angular/platform-browser";

// Routing
import { RouterModule} from '@angular/router'
import {rootRouterConfig} from './app.routes';

//Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Application Components
import { AppComponent }       from "./app";

import { AgendaComponent} from './../agenda/agenda.component'
import { NavbarComponent} from './../navbar/navbar.component'
import { UsersOverviewComponent} from './../users/users-overview.component'
import { UserComponent} from './../users/user.component';
import { UserFormComponent} from './../users/user-form.component';
import { UserService} from './../users/user.service'


@NgModule({
  declarations: [AppComponent,AgendaComponent, NavbarComponent, UsersOverviewComponent, UserComponent, UserFormComponent],
  imports: [BrowserModule,  RouterModule.forRoot(rootRouterConfig), FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [UserService]
})

export class AppModule {

}

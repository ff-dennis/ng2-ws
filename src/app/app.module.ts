// System Modules
import { NgModule }           from '@angular/core'
import { BrowserModule }      from "@angular/platform-browser";

// Routing
import { RouterModule }       from "@angular/router";
import { rootRouterConfig }   from "./app.routes";

// Application Components
import { AppComponent }       from "./app";
import { NavbarComponent }    from "./navbar/navbar.component";
import { AgendaComponent }    from "./agenda/agenda.component";
import { NotFoundComponent }  from './notfound.component';

// Application Modules
import { UsersModule }        from './users/users.module';
import { PostsModule }        from './posts/posts.module';
import { SharedModule }       from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AgendaComponent, NotFoundComponent],
  imports: [BrowserModule, RouterModule.forRoot(rootRouterConfig), UsersModule, PostsModule, SharedModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {

}

import {Routes}                 from '@angular/router';
import {AgendaComponent}        from './agenda/agenda.component';
import {UsersOverviewComponent} from './users/users-overview.component';
import {UserFormComponent}      from './users/user-form.component';
import {PostsOverviewComponent} from './posts/posts-overview.component';
import {PostFormComponent}      from './posts/post-form.component';
import { NotFoundComponent }    from './notfound.component';


export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'users', component: UsersOverviewComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'posts', component: PostsOverviewComponent },
    { path: 'posts/new', component: PostFormComponent },
    { path: 'posts/:id', component: PostFormComponent },
    { path: 'NotFound', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
    ];

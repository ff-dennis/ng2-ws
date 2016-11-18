import { Routes } from '@angular/router';

import {AgendaComponent} from './../agenda/agenda.component';
import {UsersOverviewComponent} from './../users/users-overview.component';




export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent},
    { path: 'users', component:UsersOverviewComponent},
    { path: '**', redirectTo: 'home'}
]
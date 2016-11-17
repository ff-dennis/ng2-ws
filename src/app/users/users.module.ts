import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule }      from '@angular/forms';
import { RouterModule }             from '@angular/router';
import { HttpModule }               from '@angular/http';

import { User }                     from './user';
import { UserFormComponent }        from './user-form.component';
import { UsersOverviewComponent }   from './users-overview.component';
import { UserComponent }            from './user.component';
import { UserService }              from './user.service';

import { SharedModule }             from './../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        UserFormComponent, 
        UsersOverviewComponent,
        UserComponent
    ],
    exports: [
        UserFormComponent, 
        UsersOverviewComponent,
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule { 
}
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule }      from '@angular/forms';
import { RouterModule }             from '@angular/router';
import { HttpModule }               from '@angular/http';

import { Post }                     from './post';
import { PostsOverviewComponent }   from './posts-overview.component';
import { PostComponent }            from './post.component';
import { PostFormComponent }        from './post-form.component';
import { PostService }              from './post.service';

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
        PostFormComponent,
        PostsOverviewComponent,
        PostComponent
    ],
    exports: [
        PostFormComponent,
        PostsOverviewComponent,
        PostComponent
    ],
    providers: [
        PostService
    ]
})
export class PostsModule { 
}
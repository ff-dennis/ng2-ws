import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomValidators } from '../validators/customValidators';
import { PostService } from './post.service';
import { UserService } from './../users/user.service';
import { Post } from './post';
import { User } from './../users/user';

@Component({
    templateUrl: 'post-form.component.html'
})
export class PostFormComponent implements OnInit {
    postForm: FormGroup;
    title: string;
    post = new Post();
    users: User[];

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _postService: PostService,
        private _userService: UserService
    ) {
        this.postForm = fb.group({
            //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
            user: [],
            title: ['', Validators.required],
            body: ['', Validators.compose([Validators.required, Validators.minLength(50), Validators.maxLength(150)])]
        });
    }

    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

            this.title = (id == undefined) ? "Post create" : "Post edit";

            if (!id) {
                this.post.date = new Date();
                return;
            }

            this._postService.getPost(id)
                .subscribe(
                post => this.post = post,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });

        this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

    save() {
        let result;

        if (this.post.id === undefined) {
            result = this._postService.addPost(this.post)
        }
        else {
            result = this._postService.updatePost(this.post);
        }

        result.subscribe(x => {
            this._router.navigate(['posts']);
        });
    }
}
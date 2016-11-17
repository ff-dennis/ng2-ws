import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { Post } from './post';

import * as _ from 'lodash';

@Component({
	selector: 'posts-overview',
	templateUrl: 'posts-overview.component.html'
})

export class PostsOverviewComponent implements OnInit {

	postsLoading = false;
	posts: Post[];

	constructor(private _postService: PostService, private _userService: UserService, private _router: Router) { }

	ngOnInit() {
		this.postsLoading = true;
		this.fetchPosts(1);
	}

	fetchPosts = (page: number) => {
		this.postsLoading = true;
		this._postService.getSortedPostsByPage(page)
			.subscribe(
			posts => {
				this.posts = (posts.sort((a: Post, b: Post) => {
					return new Date(b.date).getTime() - new Date(a.date).getTime();
				}));
			},
			response => {
				console.log(response);
				if (response.status == 404 || response.status == 0) {
					this._router.navigate(['NotFound']);
				}
			},
			() => { this.postsLoading = false; })
	}

	removePost(post) {
		if (confirm("Are you sure you want to delete " + post.title + "?")) {
			this._postService.deletePost(post.id)
				.subscribe(this.fetchPosts,
				err => {
					alert("Could not delete the post.");
				});
		}
	}

	onPageChanged(page) {
		this.fetchPosts(page);
	}
}
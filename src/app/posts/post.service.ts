import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import * as _ from 'lodash';

@Injectable()
export class PostService {
    private _url = "http://localhost:3000/posts";
    private _pageSuffix = "?_sort=date&_order=DESC&_page=";

    constructor(private _http: Http) {
    }

    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getSortedPostsByPage(page: number) {
        return this._http.get(this._url + this._pageSuffix + page)
            .map(res => res.json());
    }

    getPostsByUser(userId) {
        return this._http.get(this._url)
            .map(res => res.json())
            .filter(post => post.userId === userId);
    }

    getPost(postId) {
        return this._http.get(this.getPostUrl(postId))
            .map(res => res.json());
    }

    addPost(post) {
        return this._http.post(this._url, post)
            .map(res => res.json());
    }

    updatePost(post) {
        return this._http.put(this.getPostUrl(post.id), post)
            .map(res => res.json());
    }

    deletePost(postId) {
        return this._http.delete(this.getPostUrl(postId))
            .map(res => res.json());
    }

    private getPostUrl(postId) {
        return this._url + "/" + postId;
    }
}
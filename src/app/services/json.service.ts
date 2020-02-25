import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class JsonService {

    constructor(private http: HttpClient) {

    }

    getPosts(url?: string) {
        const adding = url ? url : '';
        return this.http.get('https://jsonplaceholder.typicode.com/posts' + adding);
    }

}

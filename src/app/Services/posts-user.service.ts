import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient,   HttpHeaders} from '@angular/common/http';
import { Posts } from '../Model/posts';
//import { url } from 'inspector'; //cause issue;

const httpOptions = { headers: new HttpHeaders({'content-Type':'application/json'}) }; // Cannot define const inside Class

@Injectable({
  providedIn: 'root'
})

export class PostsUserService {
  constructor(private http: HttpClient) { }
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Posts[]> {
    console.log("getPosts()");
    return this.http.get<Posts[]>(this.postsUrl);
  }

savePost(data: Posts): Observable<Posts> {
return this.http.post<Posts>(this.postsUrl, data, httpOptions);
}

updatePost(post: Posts): Observable<Posts>{
  const updateUrl=`${this.postsUrl}/${post.id}`;
  return this.http.put<Posts>(updateUrl, post, httpOptions);
}

  debug() {
    console.log("Debug()");
    this.getPosts().subscribe(data => {
      console.log(data);
    });
  }
}

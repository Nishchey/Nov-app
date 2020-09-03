import { PostsUserService } from './../Services/posts-user.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../Model/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _postService: PostsUserService) { }
posts: Posts[];

ngOnInit() {
  this._postService.getPosts().subscribe(data => {
    //console.log(data);
this.posts = data;
  });

  //this._postService.debug();
}

}

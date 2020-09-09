import { Posts } from './../Model/posts';
import { PostsUserService } from './../Services/posts-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  constructor(private _postService: PostsUserService) {}
  posts: Posts[];
  currentPost: Posts = {
    id: 0,
    body: "",
    title: ""
  };
  isEdit: boolean=false;
  ngOnInit() {
    this._postService.getPosts().subscribe((data) => {
      //console.log(data);
      this.posts = data;
    });
    //this._postService.debug();
  }

  onNewPost(post: Posts) {
    this.posts.unshift(post);
  }

  editPost(post: Posts) {
    this.currentPost = post;
    this.isEdit=true;
  }
}

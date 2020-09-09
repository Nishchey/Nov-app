import { Posts } from './../Model/posts';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostsUserService } from '../Services/posts-user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  constructor(private _postService: PostsUserService) { }
post: Posts;
@Output() newPost: EventEmitter<Posts> = new EventEmitter();
@Input() currentPost: Posts;
@Input() isEdit: boolean;
@Output() updatedPost: EventEmitter<Posts> = new EventEmitter();
  ngOnInit() {
  }
  AddPosts(title,body){
    //console.log(title, body);
    if (!title || !body) alert("Enter Required fields");
    else {
      this._postService.savePost({ title, body } as Posts).subscribe((data) => {
        console.log("AddPosts" + data);
        this.newPost.emit(data);
      });
    }
  }

  updatePost(){
    console.log("updatepost");
    this._postService.updatePost(this.currentPost).subscribe(
      (post) => {
        console.log(post);
        this.isEdit = false;
        this.updatedPost.emit(post);
      }
    );

  }

}

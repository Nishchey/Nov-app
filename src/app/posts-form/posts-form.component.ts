import { Posts } from './../Model/posts';
import { Component, OnInit } from '@angular/core';
import { PostsUserService } from '../Services/posts-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {

  constructor(private _postService: PostsUserService) { }

  ngOnInit() {
  }
  AddPosts(title,body){
    //console.log(title, body);
    if(!title || !body)
    alert("Enter Required fields");
    else{
      this._postService.savePost({title,body} as Posts).subscribe(
        posts=>{
          console.log("AddPosts" + posts);
        }
      )
    }
  }

}

import { UserserviceService } from './../Services/userservice.service';
import { User } from './../Model/user';
import { Component, OnInit,ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
   users?: User[];
  addUserData: User = { name: null, email: null };
  // @ViewChild("usersForm") form: any;
  bannerMsg: string = null;
  constructor(private _userService: UserserviceService) {}

  ngOnInit() {
    // this.users=this._userService.getUsers(); //without Observable
    this._userService.getUsers().subscribe(data=>{console.log("Observale Data "+data);
  this.users = data;
  });
    console.log("Users ngOnInit ="+this.users);
  }

  addUser(addUserData) {
    var newobj = Object.assign({}, addUserData); //reference type , overwrites value of old variable instead of adding new
     this.users.unshift(newobj);
  }
  onSubmit(e) {
    console.log(
      "user data :" + this.addUserData.name + " " + this.addUserData.email
    );
    this.addUser(this.addUserData);
    this.users.forEach(item => {
      console.log("\n userObject"+ " "+ item.name+ "" + item.email);
    });

  }
  // onSubmit({ value, valid }: { value: User; valid: Boolean }) {
  //   // if (!valid) {
  //   //   this.bannerMsg = "Form not valid ! BannerMSG";
  //   // } else {
  //   //   this.users.unshift(value);
  //   // }
  //   // console.log("from submitted");
  //   // this.users.name="Nish";
  //   // this.users.email="nish@getMaxListeners.com";
  // }
}

import { User } from './../Model/user';
import { Component, OnInit,ViewChild } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users?: User[] = [
    {
      name: "test1",
      email: "test@gmail.com",
    },
    {
      name: "test2",
      email: "test2@gmail.com",
    }
  ];
  addUserData: User = { name: null, email: null };
  // @ViewChild("usersForm") form: any;
  bannerMsg: string = null;
  constructor() {}

  ngOnInit() {}

  addUser(addUserData) {
     this.users.push(addUserData);
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

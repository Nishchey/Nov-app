import { User } from './../Model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // /Obervable
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users: User[];
  data : Observable<any>;
  constructor() {
    // tslint:disable-next-line:no-unused-expression
    this.users=[//assiging by '===' causes problem , gives error in Inspect window
      {
        name: "test1",
        email: "test@gmail.com",
      },
      {
        name: "test2",
        email: "test2@gmail.com",
      }
    ];
   }

  //  getUsers(): User[] { //without Observable
  //  console.log("Getting users from service ="+this.users[0].email);
  //         return this.users;
  // }

   getUsers(): Observable<User[]> { //with Observable
    console.log("Getting users from service ="+this.users[0].email);
           return of(this.users);
    }
}

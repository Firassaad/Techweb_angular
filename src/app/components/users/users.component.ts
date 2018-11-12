import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users : User[]
  constructor() { }

  ngOnInit() {
  this.users= [
    {fname : 'ameni', lname: 'ben ahmed', email:'ameni@fb.tn'},
    {fname : 'asma', lname: 'ben ali', email:'asma@fb.tn'}

  ]
  }

}

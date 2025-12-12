import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Header } from './header/header';
import { DUMMY_USERS } from './user/dumy-users';
import { Tasks } from "./tasks/tasks";
import { NewTask } from './tasks/new-task/new-task';

@Component({
  selector: 'app-root',
  imports: [User, Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
user=DUMMY_USERS;
selectedUserId?:string;;
get selectedUser(){
  return this.user.find((user)=>user.id===this.selectedUserId)!;
}
onSelectUser(id:string)
{
  console.log('selected user id:'+id);
  this.selectedUserId=id;

}

}

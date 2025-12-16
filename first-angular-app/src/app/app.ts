import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dumy-users';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
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

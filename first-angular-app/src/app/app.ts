import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Header } from './header/header';
import { DUMMY_USERS } from './user/dumy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
user=DUMMY_USERS;
onSelectUser(id:string)
{
  console.log('selected user id:'+id);
}

}

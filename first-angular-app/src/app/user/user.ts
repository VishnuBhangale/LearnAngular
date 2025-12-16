import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Users } from './user.model';
// type users={
//   id: string;
//     name: string;
//    avatar: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  standalone: false
})
export class User {
  // @Input() id!: string;
  // @Input() name!: string;
  // @Input() avatar!: string;
  // @Input() user! : {
  //   id: string;
  //   name: string;
  //   avatar: string;
  // }
  @Input() selected!:boolean;;
  @Input() user!: Users;
  
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }

}



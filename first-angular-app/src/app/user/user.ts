import { Interpolation } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// type users={
//   id: string;
//     name: string;
//    avatar: string;
// }
interface Users{
     id: string;
    name: string;
    avatar: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
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
  @Input() user!: Users;
  
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }

}



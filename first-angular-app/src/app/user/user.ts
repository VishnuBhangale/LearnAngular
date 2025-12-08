import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  @Input() id!: string;
  @Input() name!: string;
  @Input() avatar!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  }

}



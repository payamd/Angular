import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 
const userIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[userIndex];
  get imagepath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectItem() {
  console.log('Selected user:', this.selectedUser);
  }

}

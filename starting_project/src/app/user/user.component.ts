import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();

  // Getter
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// const randomIned = Math.floor(Math.random() * DUMMY_USERS.length);
// // First way to work with state
// slectedUser = DUMMY_USERS[randomIned];
// onSelectUser() {
//   const randomIned = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.slectedUser = DUMMY_USERS[randomIned];
// }
// // Getter
// get imagePath() {
//   return 'assets/users/' + this.slectedUser.avatar;
// }

// // Second way to work with state {{ Signals }}
// slectedUser = signal(DUMMY_USERS[randomIned]);
// onSelectUser() {
//   const randomIned = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.slectedUser.set(DUMMY_USERS[randomIned]);
// }
// imagePath = computed(() => 'assets/users/' + this.slectedUser().avatar);
// avatar = input<string>(');
// avatar = input.required<string>();

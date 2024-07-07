import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
})
export class AppComponent {
  users = DUMMY_USERS;

  userName = '';

  onSelect(event: { id: string; name: string }) {
    console.log(event.id);
    this.userName = event.name;
  }
}

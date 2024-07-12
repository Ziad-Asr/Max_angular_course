import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
// import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  // providers: [TasksService],
  // // Only provide the service to 1)this component 2)It's children only.
  // // If I used this component twise => This will lead to two isolated services with differant variables' values.
})
export class TasksComponent {}

import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTAsk: Task = {
      // Must put it of type (Task) here to make sure andnot giving an error.
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTAsk]);
  }
}

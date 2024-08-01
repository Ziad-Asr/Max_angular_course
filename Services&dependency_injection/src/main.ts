import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

//**** Made on signals
// this.tasks.set([newTask]);
// this.tasks.update((tasks) => [...tasks, newTask]);
// tasks = computed()  => Returns a signal that depends on other signals, and recomputed if any signal of those changed.

// 1)[asReadOnly()] -- or -- 2)[Getter function] -- (+ {{ private }} keyword on the protected varuable)

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// Injecting Services
//--------------------
// 1) private taskService: TasksService;
//      constructor() {
//      this.taskService = new TasksService();
//    }
// ** Bad way because it make an (separted instance) for each component, and that is useless.

// 2) private taskService: TasksService;
//      constructor(tService: TasksService) {
//      this.taskService = tService;
//    }
// Or
// 2) constructor(private taskService: TasksService) {}
// ** The right way

// 3) private taskService = inject(TasksService);
// ** The best way

// ______________________________________________________________________________________________________________________________
// ______________________________________________________________________________________________________________________________

// @Injectable({ providedIn: 'root' })
// provider: [TasksService] => called {{ Element injector }}

// I can use the provder code and remove the injectable part, to make an (instance) of that service inside a (specific component and it's children).

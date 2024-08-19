import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ counter: counterReducer })],
});

// When putting ($) in the end of a variable => this indicates that that variable is holdingan ((objservable))  {Not Mandatory}.
// { | async} pipe => is used to outomatically update the value when changing on the store.
// {{[Counter] Increment'}} in (store => couter.actions.ts) => We added [Counter] here to ensure that this unique indentifier is not repeated.

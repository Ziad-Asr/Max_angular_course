import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, { providers: [provideHttpClient()] }).catch(
  (err) => console.error(err)
);

// config can be used in (HttpClient)
// {
// observe: 'response', // Gives you more info like the type of the response, the status code and ...
// observe: 'event',    // The same as response, but returns an object with type property when ((sending the request)), allows you to perform deifferent action on different points of time {afetr request sent, after response came back}
// }

// pipe(map((resData) => resData.places)) => You can transform data before subscribing to it.

// .tap() => make a login on an (( observable )) without subscribing to it.

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterseptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // ***** Change the Request *****
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING'), // adding a new header
  // });
  // return next(req);

  // ***** Change the Response *****
  // return next(request).pipe(
  //   tap({
  //     next: (event) => {
  //       if (event.type === HttpEventType.Response) {
  //         console.log(event);
  //         console.log(event.body);
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Request failed', err);
  //     },
  //   })
  // );

  return next(request);
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterseptor]))],
}).catch((err) => console.error(err));

// config can be used in (HttpClient)
// {
// observe: 'response', // Gives you more info like the type of the response, the status code and ...
// observe: 'event',    // The same as response, but returns an object with type property when ((sending the request)), allows you to perform deifferent action on different points of time {afetr request sent, after response came back}
// }

// pipe(map((resData) => resData.places)) => You can transform data before subscribing to it.

// .tap() => make a login on an (( observable )) without subscribing to it.

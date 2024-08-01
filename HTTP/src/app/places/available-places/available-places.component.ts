import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  places = signal<Place[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal<string>('');

  ngOnInit() {
    this.isFetching.set(true);

    // returns an observable
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places', {
        // observe: 'response', // Gives you more info like the type of the response, the status code and ...
        // observe: 'event',    // The same as response, but returns an object with type property when ((sending the request)), allows you to perform deifferent action on different points of time {afetr request sent, after response came back}
      })
      .pipe(
        // You can transform data before subscribing to it.
        map((resData) => resData.places),
        catchError((error) => {
          console.log(error);
          return throwError(
            () =>
              new Error('Something went wrong fetching the available places')
          );
        })
      )
      .subscribe({
        next: (resData) => this.places.set(resData),
        error: (err: Error) => {
          this.error.set(err.message);
          this.isFetching.set(false);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSlectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({ next: (resData) => console.log(resData) });
  }
}

import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  places = signal<Place[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  error = signal<string>('');

  ngOnInit() {
    this.isFetching.set(true);

    // returns an observable (use {{ .suscribe }} on it)
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
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
    const subscription = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({ next: (resData) => console.log(resData) });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

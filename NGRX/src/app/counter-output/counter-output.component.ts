import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectCounter, selectDoubleCounter } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // this.count$ = this.store.select('counter');
    this.count$ = this.store.select(selectCounter);
    this.doubleCount$ = this.store.select(selectDoubleCounter);
  }
}

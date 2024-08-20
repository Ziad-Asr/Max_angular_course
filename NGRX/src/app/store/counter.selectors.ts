import { createSelector } from '@ngrx/store';

export const selectCounter = (state: { counter: number }) => state.counter;
export const selectDoubleCounter = createSelector(
  selectCounter,
  (state) => state * 2
); // Can accept multiple selectors and perform functions on them to return a value.

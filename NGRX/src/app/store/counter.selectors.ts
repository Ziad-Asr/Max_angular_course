import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2
); // Can accept multiple selectors and perform functions on them to return a value.

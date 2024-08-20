import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';
import { decrement } from './counter.actions';

const intialState = 0;

export const counterReducer = createReducer(
  intialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

// export function counterReducer(state = intialState, action: any) {
//   if (action.type === '[Counter] Increment') {
//     return state + action.value;
//   }
//   return state;
// }

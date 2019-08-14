// Redux!!!
import { createStore } from 'redux';

// state sets up the default state value
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
});

// Do something when state changes
store.subscribe(() => {
  console.log(store.getState());
});

// Unsubscribe from changes
// const unsubscribe = store.subscribe(() => {
//    console.log(store.getState());
//  });

// getState: fetch current state (returns object)
// console.log(store.getState());

// Actions - object that gets sent to the store
// describes action to take
// increment, decrement, reset, etc. (caps and underscore: conventional use)
// *Type must be defined
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// Call to unsubscribe
// unsubscribe();

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'RESET'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});

// console.log(store.getState());
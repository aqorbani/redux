//import createstore
const createStore = require("redux").createStore;

// action
function incrementCounter() {
  return {
    type: "INCREMENT",
  };
}
function incrementCounterByAmount(amount) {
  return {
    type: "INCREMENT_BY_AMOUNT",
    payload: amount,
  };
}
function decrementCounter() {
  return {
    type: "DECREMENT",
  };
}

//initial state
const initialState = {
  counter: 0,
  number: 5,
};

//reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "INCREMENT_BY_AMOUNT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(counterReducer);
console.log(store.getState());
store.dispatch(incrementCounter());
console.log(store.getState());
store.dispatch(decrementCounter());
console.log(store.getState());
store.dispatch(incrementCounterByAmount(5));
console.log(store.getState());

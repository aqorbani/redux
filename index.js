//import createstore
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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

//second action
function incrementNumber() {
  return { type: "INCREMENT_NUMBER" };
}

//second initial state
const secondinitialState = {
  number: 5,
};

//second reducer
const numberReducer = (state = secondinitialState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

//store
const rootReducer = combineReducers({
  counter: counterReducer,
  number: numberReducer,
});
const store = createStore(rootReducer);
console.log(store.getState());
store.dispatch(incrementCounter());
console.log(store.getState());
store.dispatch(incrementNumber());
console.log(store.getState());

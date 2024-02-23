//import createstore
const createStore = require("redux").createStore;

// action
function incrementCounter() {
  return {
    type: "INCREMENT",
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
    default:
      return state;
  }
};

//store
const store = createStore(counterReducer);
console.log(store.getState());
store.dispatch(incrementCounter());
console.log(store.getState());

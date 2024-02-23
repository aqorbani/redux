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
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: counter + 1,
      };
    default:
      return state;
  }
};

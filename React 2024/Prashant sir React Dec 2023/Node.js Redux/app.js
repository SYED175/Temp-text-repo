// const redux = require("redux");

// const INITIAL_COUNTER = {
//   counter: 0,
// };

// const reducer = (store = INITIAL_COUNTER, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1 };
//   } else if (action.type === "ADD") {
//     newStore = { counter: store.counter + action.payload.value };
//   } else if (action.type === "DECREMENT") {
//     newStore = { counter: store.counter - 1 };
//   }
//   return newStore;
// };

// const store = redux.createStore(reducer);

// const subscribeFunc = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(subscribeFunc);

// store.dispatch({
//   type: "ADD",
//   payload: {
//     value: 11,
//   },
// });

// store.dispatch({
//   type: "DECREMENT",
// });

const redux = require("redux");

const counter = {
  counter: 0,
};
const reducer = (store = counter, action) => {
  let newStore = store;
  if (action.type === "ADD") {
    newStore = { counter: store.counter + action.payload.value };
  } else if (action.type === "INC") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DEC") {
    newStore = { counter: store.counter - 1 };
  }
  return newStore;
};
const store = redux.createStore(reducer);

const func1 = () => {
  const state = store.getState();
  console.log(state);
};

func1();
//func1 is subscriber
store.subscribe(func1);

store.dispatch({
  type: "INC",
});

store.dispatch({
  type: "ADD",
  payload: {
    value: 20,
  },
});
store.dispatch({
  type: "DEC",
});
store.dispatch({
  type: "DEC",
});

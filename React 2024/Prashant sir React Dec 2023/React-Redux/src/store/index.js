import { createStore } from "redux";

const INITIAL_COUNTER = {
  counter: 0,
  privacy: false,
};
const reducerCounter = (store = INITIAL_COUNTER, action) => {
  let newStore = store;
  if (action.type === "INC") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type === "DEC") {
    newStore = { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    newStore = { ...store, counter: store.counter + action.payload.number };
  } else if (action.type === "SUBSTRACT") {
    newStore = { ...store, counter: store.counter - action.payload.number };
  } else if (action.type === "PRIVACY") {
    newStore = { ...store, privacy: !store.privacy };
  }
  return newStore;
  //always kept forgetting to return!
};
const counterStore = createStore(reducerCounter);

export default counterStore;

import { combineReducers, createStore } from "redux";
import currentItemReducer from "./currentItem";
import itemReducer from "./dataItem";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
  items: itemReducer,
  currentItem: currentItemReducer
});

export const store = createStore(rootReducer);

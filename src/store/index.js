import { combineReducers, createStore } from "redux";
import countAmountReducer from "./countAmount";
import currentItemReducer from "./currentItem";
import itemReducer from "./dataItem";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
  items: itemReducer,
  currentItem: currentItemReducer,
  amount: countAmountReducer
});

export const store = createStore(rootReducer);

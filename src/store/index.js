import { combineReducers, createStore } from "redux";
import countAmountReducer from "./countAmount";
import currentItemReducer from "./currentItem";
import currentOrderReducer from "./currentOrder";
import amountOrderReducer from "./currentOrder/amountOrder";
import itemReducer from "./dataItem";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
  items: itemReducer,
  currentItem: currentItemReducer,
  amount: countAmountReducer,
  order: currentOrderReducer,
  orderAmount: amountOrderReducer
});

export const store = createStore(rootReducer);

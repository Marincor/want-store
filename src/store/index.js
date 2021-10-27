import { combineReducers, createStore } from "redux";
import countAmountReducer from "./countAmount";
import currentItemReducer from "./currentItem";
import currentOrderReducer from "./currentOrder";
import amountOrderReducer from "./currentOrder/amountOrder";
import itemReducer from "./dataItem";
import loadingReducer from "./loading";
import searchedItemReducer from "./searchedItem";

const rootReducer = combineReducers({
  loading: loadingReducer,
  items: itemReducer,
  currentItem: currentItemReducer,
  amount: countAmountReducer,
  order: currentOrderReducer,
  orderAmount: amountOrderReducer,
  search: searchedItemReducer
});

export const store = createStore(rootReducer);

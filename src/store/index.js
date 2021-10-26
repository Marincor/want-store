import { combineReducers, createStore } from "redux";
import itemReducer from "./dataItem";
import idReducer from "./id";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
  id: idReducer,
  items: itemReducer
});

export const store = createStore(rootReducer);

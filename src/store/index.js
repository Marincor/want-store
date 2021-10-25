import { combineReducers, createStore } from "redux";
import idReducer from "./id";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
  loading: loadingReducer,
  id: idReducer,
});

export const store = createStore(rootReducer);

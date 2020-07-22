import { createStore, applyMiddleware } from "redux";
import { weatherReducer } from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

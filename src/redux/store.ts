import { createStore, combineReducers } from "redux";
import pageIdReducer from "./reducers/pageIdReducer";

const rootReducer = combineReducers({
  count: pageIdReducer,
});

export const store = createStore(rootReducer);

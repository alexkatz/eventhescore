import { Reducer, combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { State } from "./state";
import { reducer as auth } from '../auth/reducer';

export function createRootReducer(): Reducer<State> {
  return combineReducers<State>({
    routing,
    auth,
  });
}
import { Reducer, combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { AppState } from "./state";
import { reducer as auth } from '../auth/reducer';

export function createRootReducer(): Reducer<AppState> {
  return combineReducers<AppState>({
    routing,
    auth,
  });
}
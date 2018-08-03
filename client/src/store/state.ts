import { RouterState } from "react-router-redux";
import { AuthState } from "../auth/reducer";

export interface AppState {
  routing: RouterState;
  auth: AuthState;
}
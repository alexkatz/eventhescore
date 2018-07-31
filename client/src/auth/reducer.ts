import { actionType, AuthAction } from "./action";
import { Action } from "redux";
import { User } from "../auth/User";

export interface AuthState {
  user?: User;
}

const initialState: AuthState = {
  user: null,
}

export const reducer = (state: AuthState = initialState, action: AuthAction & Action): AuthState => {
  switch (action.type) {
    case actionType.AUTHENTICATE: {
      const { user } = action;
      return {
        ...state,
        user,
      };
    }
    default:
      return state;
  }
}

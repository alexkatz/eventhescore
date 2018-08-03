import { ThunkAction } from 'redux-thunk';
import { AppState } from '../store/state';
import { client } from '../shared/client';
import { Action } from 'redux';
import { User } from '../auth/User';
import { AuthPayload } from '../auth/AuthPayload';
import { Platform } from './Platform';

export enum actionType {
  AUTHENTICATE = 'auth/AUTHENTICATE',
}

export interface AuthAction extends Action {
  user?: User;
}

export const authenticate = (authPayload: AuthPayload): ThunkAction<Promise<void>, AppState, any, AuthAction> =>
  async dispatch => {
    try {
      if (process.env.MOCK) {
        dispatch({
          type: actionType.AUTHENTICATE, user: {
            apiToken: '',
            authPlatform: Platform.Google,
            email: 'mock@mock.com',
            firstName: 'mock',
            lastName: 'mockson',
            id: 0,
            imageUrl: '',
          },
        });
        return;
      }
      const user: User = await client.post('/auth', authPayload);
      dispatch({ type: actionType.AUTHENTICATE, user });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
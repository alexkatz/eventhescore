import * as React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { wrap } from '../shared/utilities';
import { State } from '../store/state';
import { User } from '../auth/User';
import { LoginView } from '../auth/LoginView';

interface AppProps {
  user?: User;
}

const App: React.ComponentType<AppProps> = ({ user }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
    }}
  >
    {!user && <LoginView />}
  </div>
);

const wrapped: React.ComponentType<AppProps> = wrap(App, [
  connect(
    (state: State) => ({
      user: state.auth.user,
    }),
  ),
]);

export { wrapped as App };

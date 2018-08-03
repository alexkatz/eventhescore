import * as React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { wrap } from '../shared/utilities';
import { AppState } from '../store/state';
import { User } from '../auth/User';
import { LoginView } from '../auth/LoginView';
import { HomeView } from '../home/HomeView';
import { HeaderView } from '../header/HeaderView';

const FILL_PARENT_PERCENT: React.CSSProperties = { width: '100%', height: '100%' };

interface AppProps {
  user?: User;
}

const App: React.ComponentType<AppProps> = ({ user }) => (
  <div style={FILL_PARENT_PERCENT}>
    {!user && <LoginView />}
    {user && (
      <div style={FILL_PARENT_PERCENT}>
        <HeaderView
          style={{
            height: 70,
            zIndex: 2,
            backgroundColor: 'lightgray',
          }}
        />
        <HomeView
          style={{
            height: '100%',
            backgroundColor: 'orange',
          }}
        />
      </div>

    )}
  </div>
);

const wrapped = wrap(App, [
  connect(
    (state: AppState) => ({
      user: state.auth.user,
    }),
  ),
]);

export { wrapped as App };

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/App';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import * as DevTools from './devTools/DevTools';

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {DevTools && <DevTools />}
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
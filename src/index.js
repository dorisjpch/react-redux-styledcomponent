import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import App from './Components/App';

// Global Styles:
import './styles/global.scss';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App routes={routes} />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
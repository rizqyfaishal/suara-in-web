import ReactDOM from 'react-dom';
import React from 'react';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import App from 'app/containers/App';
import configStore from 'app/utils/configStore';

const MOUNT_NODE = document.getElementById('app');
const initialState = new Map();

const store = configStore(initialState, history);
const history = createBrowserHistory()


function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}  >
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  )
}


render();

if(module.hot) {
  module.hot.accept(['app/containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  })
}

import '../assets/application.css';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cookies from 'js-cookie';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gon from 'gon';
import App from './components/App';
import reducers from './reducers';
// import io from 'socket.io-client';

cookies.set('user', faker.name.findName());

const { channels } = gon;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  { channels },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// const ChannelsContext = React.createContext();
// export default ChannelsContext;

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  // {/* // <ChannelsContext.Provider value={channels}> */}
  <Provider store={store}>
    <App />
  </Provider>,
  // </ChannelsContext.Provider>,
  document.getElementById('chat'),
);

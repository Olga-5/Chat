import '../assets/application.css';
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cookies from 'js-cookie';
import App from './components/App';
// import io from 'socket.io-client';

cookies.set('user', faker.name.findName());

const { channels } = window.gon;
const ChannelsContext = React.createContext();
export default ChannelsContext;

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  <ChannelsContext.Provider value={channels}>
    <App />
  </ChannelsContext.Provider>,
  document.getElementById('chat'),
);

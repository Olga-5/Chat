import React from 'react';
import AppBar from './AppBar';
import ChannelsList from './ChannelsList';
import ChannelsContext from '../index';
import InputForMessage from './InputForMessage';

const App = props => (
  <div>
    <AppBar />
    <div className="content">
      <ChannelsContext.Consumer>
        {channels => <ChannelsList {...props} channels={channels} />}
      </ChannelsContext.Consumer>
      <InputForMessage />
    </div>
  </div>
);

export default App;

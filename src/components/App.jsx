import React from 'react';
import AppBar from './AppBar';
// import ChannelsList from './ChannelsList';
// import ChannelsContext from '../index';
import InputForMessage from './InputForMessage';
import ChannelsList from './ChannelsList';

const App = () => (
  <div>
    <AppBar />
    <div className="content">
      <ChannelsList />
      {/* <ChannelsContext.Consumer> */}
      {/* {channels => <ChannelsList {...props} channels={channels} />} */}
      {/* </ChannelsContext.Consumer> */}
      <InputForMessage />
    </div>
  </div>
);

export default App;

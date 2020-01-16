import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './src/routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#005d93" />
      <Routes />
    </>
  );
};

export default App;

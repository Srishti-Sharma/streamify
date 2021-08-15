import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigator from './Navigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator />
    </>
  );
};

export default App;

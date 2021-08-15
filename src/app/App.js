import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigator from './Navigator';
// Redux
import {Provider} from 'react-redux';

// Redux Store
import configure from '../store';

// Configure Store
const {store} = configure();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </Provider>
    </>
  );
};

export default App;

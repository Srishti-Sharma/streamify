import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
// import Navigator from './Navigator';
import AppNavigator from './AppNavigator';
// Redux
import {Provider} from 'react-redux';

// Redux Store
import configure from '../store';

// Configure Store
const {store} = configure();

const App = () => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;

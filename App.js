import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Application from './Application';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Application />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

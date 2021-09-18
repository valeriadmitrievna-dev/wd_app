import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Application from './Application';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Application />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

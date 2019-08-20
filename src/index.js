import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import { store, persistor } from './store';

import App from './App';

import globalStyle from './styles/global';

const Index = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={globalStyle.primary}
          />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Index;

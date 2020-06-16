import React from 'react';
import {Provider} from 'react-redux';

import createStore from './store';
import AppNavigation from './navigation';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = createStore();

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

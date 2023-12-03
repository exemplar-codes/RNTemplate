import React from 'react';

import {Provider} from 'react-redux';

import store from './src/store/index.js';
import TryScreen from './src/screens/TryScreen.js';
// import OldApp from './App.old.tsx';

export default function App() {
  return (
    <Provider store={store}>
      <TryScreen />
    </Provider>
  );
}

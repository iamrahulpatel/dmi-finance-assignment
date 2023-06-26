// import React, { useState } from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
import React from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/configStore'
import { PersistGate } from 'redux-persist/integration/react'
import MainRoute from './src/routing/main-route';


const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <MainRoute />
      </PersistGate>
    </Provider>
  )
}

export default App;


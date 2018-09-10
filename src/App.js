import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReducThunk from 'redux-thunk';
import reducer from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDKoFNexQLmGKwplU9QrKMCH3GoZluFfg0',
    authDomain: 'manager-7f2dc.firebaseapp.com',
    databaseURL: 'https://manager-7f2dc.firebaseio.com',
    projectId: 'manager-7f2dc',
    storageBucket: 'manager-7f2dc.appspot.com',
    messagingSenderId: '149984526628'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
        <Provider store={createStore(reducer, {}, applyMiddleware(ReducThunk))}>
          <Router />
        </Provider>
  );
  }
}

export default App;

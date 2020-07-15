import React, {Component} from 'react';
import * as configureStore from './store';
import {Provider} from 'react-redux';
import App from '../App';

export default class AppProvider extends Component {
    render () {
        return (
          <Provider store={configureStore.STORE}>
            <App />
          </Provider>
        );
      }
}
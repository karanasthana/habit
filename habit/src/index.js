import React, {Component} from 'react';
import * as store from './store';
import {Provider} from 'react-redux';
import App from '../App';

export default class AppProvider extends Component {
    render () {
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
      }
}
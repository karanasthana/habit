import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

module.exports = {
    configureStore
};
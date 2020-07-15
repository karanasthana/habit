import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from '../reducers/root-reducer'

const middleware = [thunk];
let enhancer;

middleware.push(logger);

enhancer = compose(
    applyMiddleware(thunk, ...middleware)
);

const configureStore = () => createStore(rootReducer, {}, enhancer);

module.exports = {
    configureStore
};
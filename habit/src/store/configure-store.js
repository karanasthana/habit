import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

const middleware = [thunk];
let enhancer;

middleware.push(logger);

enhancer = compose(
    applyMiddleware(thunk, ...middleware)
);

export default function configureStore(initialState) {
    const store = createStore( initialState, enhancer );
    return store;
}
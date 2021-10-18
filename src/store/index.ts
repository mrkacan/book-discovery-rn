import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
    middleware.push(createLogger());
}

const enhancers = [applyMiddleware(...middleware)];
const reducer = combineReducers(reducers);

const store = createStore(reducer, undefined, compose(...enhancers));

const configureStore = () => {
    return {store};
};

sagaMiddleware.run(sagas);

export default configureStore;

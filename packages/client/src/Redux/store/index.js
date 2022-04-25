import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistReducer from '../reducers';

const middleware = [logger, thunk];

const compose = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(persistReducer, compose);
const persistor = persistStore(createStore(persistReducer, compose));

const exports = { store, persistor };

export default exports;

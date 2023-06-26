//REDUX PERSIST CONFIGURATION
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../store/reducer/rootReducer';
import { rootSaga } from '../store/saga/rootSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';


let store, persistor, persistConfig;

persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

if (__DEV__) {
    // Middleware: Redux Saga
    sagaMiddleware = createSagaMiddleware();
    middleware = applyMiddleware(sagaMiddleware);
    persistedReducer = persistReducer(persistConfig, RootReducer);
    // Redux: Store
    store = createStore(persistedReducer, middleware)
} else {
    sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware = applyMiddleware(sagaMiddleware);
    enhancer = compose(middleware);
    persistedReducer = persistReducer(persistConfig, RootReducer);
    store = createStore(persistedReducer, enhancer)
}

sagaMiddleware.run(rootSaga);
persistor = persistStore(store);

export { store, persistor };
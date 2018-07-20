import { Store, createStore, compose, applyMiddleware, StoreEnhancer } from "redux";
import { History } from 'history';
import { State } from './state';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createRootReducer } from "./createRootReducer";
import { createMiddleware } from "./createMiddleware";
import * as DevTools from '../devTools/DevTools';

export function configureStore(history: History): { store: Store<State>, persistor: Persistor } {
    const rootReducer = createRootReducer();
    const middleware = createMiddleware(history);

    const persistedReducer = persistReducer({
        key: 'root',
        storage,
        blacklist: [
            'routing',
        ],
    }, rootReducer);

    const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(...middleware),
            DevTools ? DevTools.instrument() : f => f,
        ) as StoreEnhancer,
    );

    const persistor = persistStore(store);

    return {
        store,
        persistor,
    };
};

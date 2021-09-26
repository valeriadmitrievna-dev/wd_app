import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import userReducer from './user';
import walkersReducer from './walkers';
import chatReducer from './chat';
import momentsReducer from './moments';

const reducers = combineReducers({
  user: userReducer,
  walkers: walkersReducer,
  chat: chatReducer,
  moments: momentsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { usersSlice } from './users/usersSlice';
import { tweetSlice } from './tweets/tweetSlice';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const TweetsPersistConfig = {
  key: 'tweets',
  storage,
};

const persistedTweetReducer = persistReducer(
  TweetsPersistConfig,
  tweetSlice.reducer
);

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  tweets: persistedTweetReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);

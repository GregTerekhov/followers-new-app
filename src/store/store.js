import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './users/usersSlice';
// import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  // persistReducer,
  // persistStore,
} from 'redux-persist';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

// const TweetsPersistConfig = {
//   key: 'users',
//   storage,
// };

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    // users: persistReducer(TweetsPersistConfig, usersSlice.reducer),
  },
  middleware,
});

// export const persistor = persistStore(store);

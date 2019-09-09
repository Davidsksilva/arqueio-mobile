import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'arqueio',
      storage,
      whitelist: ['auth', 'user', 'contacts', 'messages'],
    },
    reducers
  );

  return persistedReducer;
};

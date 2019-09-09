import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';
import socket from '~/config/socket';

import { gotMessages, gotNewMessages } from '~/store/modules/messages/actions';
import { gotUsers, gotNewUser } from '~/store/modules/contacts/actions';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

socket.on('priorMessages', messages => {
  store.dispatch(gotMessages(messages));
});

socket.on('incomingMessage', message => {
  store.dispatch(gotNewMessages(message));
});

socket.on('users', payload => {
  store.dispatch(gotUsers(payload));
});

/* socket.on('userCreated', response => {
  const { user, users } = response;
  store.dispatch(gotUser(user));
  store.dispatch(gotUsers(users));
  navigate('Users');
}); */

socket.on('newUser', user => {
  store.dispatch(gotNewUser(user));
});

export const openChat = users => {
  socket.emit('chat', users);
};

export const LoginSocket = id => {
  socket.emit('login', { id });
};

export const sendMessage = (text, sender, receiver) => {
  socket.emit('message', { text, sender, receiver });
};

export { store, persistor };

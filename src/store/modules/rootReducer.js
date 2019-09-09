import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import messages from './messages/reducer';
import contacts from './contacts/reducer';

export default combineReducers({ auth, user, contacts, messages });

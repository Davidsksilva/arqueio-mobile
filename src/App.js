import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import createRouter from './routes';

import { LoginSocket } from '~/store';
import { resetMessages } from '~/store/modules/messages/actions';

const App = () => {
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const id = useSelector(state => state.user.profile.id);
  if (signed) {
    dispatch(resetMessages());
    LoginSocket(id);
  }

  const Routes = createRouter(signed);

  return <Routes />;
};

export default App;

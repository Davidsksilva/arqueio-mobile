import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import createRouter from './routes';

import { LoginSocket } from '~/store';
import { resetMessages } from '~/store/modules/messages/actions';

const App = () => {
  const dispatch = useDispatch();
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);

  if (signed) {
    dispatch(resetMessages());
    LoginSocket(profile.id);
  }

  const Routes = createRouter(signed);

  return <Routes />;
};

export default App;

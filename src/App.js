import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

const App = () => {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(true);

  return <Routes />;
};

export default App;

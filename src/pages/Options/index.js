import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { Container, MenuItem, MenuItemText } from './styles';

import globalStyle from '~/styles/global';

import { signOut } from '~/store/modules/auth/actions';

const Options = () => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <MenuItem>
        <TouchableOpacity onPress={() => handleSignOut()}>
          <MenuItemText color={globalStyle.red}>Sair</MenuItemText>
        </TouchableOpacity>
      </MenuItem>
    </Container>
  );
};

Options.navigationOptions = {
  title: 'Opções',
};

export default Options;

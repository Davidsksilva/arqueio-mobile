import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import underConst from '~/assets/under_construction.png';
import { Container, Image, Title } from './styles';

const Archive = () => {
  return (
    <Container>
      <Image source={underConst} />
      <Title>Página em construção</Title>
    </Container>
  );
};

Archive.navigationOptions = {
  tabBarLabel: 'Arquivos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-archive" size={28} color={tintColor} />
  ),
  title: 'Arquivos',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Archive;

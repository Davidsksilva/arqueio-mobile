import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import underConst from '~/assets/under_construction.png';
import { Container, Image, Title } from './styles';

const Notifications = () => {
  return (
    <Container>
      <Image source={underConst} />
      <Title>Página em construção</Title>
    </Container>
  );
};

Notifications.navigationOptions = {
  title: 'Notificações',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default Notifications;

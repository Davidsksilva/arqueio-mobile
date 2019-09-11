import React from 'react';

import underConst from '~/assets/under_construction.png';
import { Container, Image, Title } from './styles';

import globalStyle from '~/styles/global';

const Profile = () => {
  return (
    <Container>
      <Image source={underConst} />
      <Title>Página em construção</Title>
    </Container>
  );
};

Profile.navigationOptions = () => ({
  title: 'Perfil',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#3398f4',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default Profile;

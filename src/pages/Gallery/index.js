import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, SearchBar } from './styles';
import Header from '~/components/Header';
import Filter from '~/components/FilterBar';

const Gallery = () => {
  return (
    <Container>
      <Header title="Galeria" />
      <SearchBar
        placeholder="busque por uma inspiração..."
        autoCapitalize="none"
      />
      <Filter title="Filtro1" />
    </Container>
  );
};

Gallery.navigationOptions = {
  tabBarLabel: 'Galeria',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-search" size={28} color={tintColor} />
  ),
  title: 'Projetos',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Gallery;

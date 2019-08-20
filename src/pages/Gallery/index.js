import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

import {
  Container,
  SearchBar,
  TopBar,
  Filter,
  News,
  Image,
  Photos,
} from './styles';
import Logo from '~/assets/logo.png';

import api from '~/services/api';

const listTags = [
  { id: 1, title: 'Tudo' },
  { id: 2, title: 'Sala' },
  { id: 3, title: 'Cozinha' },
  { id: 4, title: 'Banheiro' },
  { id: 5, title: 'Varanda' },
  { id: 6, title: 'Terraço' },
];

const count = 1;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    setLoading(true);
    const imgs = await api.get('/projects');
    setImages(imgs.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <TopBar title="Galeria" />
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="busque por uma inspiração..."
            autoCapitalize="none"
          />
          <Filter tags={listTags} />
          <Photos
            data={images}
            keyExtractor={image => String(image.id)}
            renderItem={item => <Image source={item.image.url} />}
          />
        </Container>
      </ScrollView>
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

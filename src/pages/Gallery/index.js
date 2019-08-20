import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, SearchBar, Photos, Image } from './styles';
import Header from '~/components/Header';
import Filter from '~/components/FilterBar';

import Api from '~/services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPhotos() {
    setLoading(true);
    const image = await Api.get('/gallery');
    setImages(image.data);
    setLoading(false);
    console.log(images);
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container>
      <Header title="Galeria" />
      <SearchBar
        placeholder="busque por uma inspiração..."
        autoCapitalize="none"
      />
      <Filter
        tags={['Tudo', 'Sala', 'Cozinha', 'Banheiro', 'Varanda', 'Terraco']}
      />
      <Photos
        data={images}
        keyExtractor={image => String(image.id)}
        renderItem={({ item }) => (
          <Image
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
        )}
      />
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

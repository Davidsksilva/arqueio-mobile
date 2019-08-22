import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Dimensions } from 'react-native';

import {
  Container,
  SearchBar,
  Filter,
  Image,
  Photos,
  LoadingContainer,
} from './styles';

import api from '~/services/api';

const listTags = [
  { id: 1, title: 'Tudo' },
  { id: 2, title: 'Sala' },
  { id: 3, title: 'Cozinha' },
  { id: 4, title: 'Banheiro' },
  { id: 5, title: 'Varanda' },
  { id: 6, title: 'Terraço' },
];

const BOX_SIZE = Dimensions.get('window').width / 2 - 12;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  async function fetchImages() {
    setLoading(true);
    const imgs = await api.get('/gallery');
    setImages(imgs.data);
    setLoading(false);
  }

  function handleTagButton(id_) {
    console.log('oi');
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="busque por uma inspiração..."
            autoCapitalize="none"
          />
          <Filter tags={listTags} handleButton={handleTagButton} />
          {loading ? (
            <LoadingContainer>
              <ActivityIndicator color="#333" size="large" />
            </LoadingContainer>
          ) : (
            <Photos
              data={images}
              keyExtractor={image => String(image.id)}
              columnWrapperStyle={{
                flex: 1,
                justifyContent: 'space-around',
              }}
              renderItem={item => {
                return (
                  <Image
                    style={{ height: BOX_SIZE, width: BOX_SIZE }}
                    source={{ uri: item.item.image.path }}
                  />
                );
              }}
            />
          )}
        </Container>
      </ScrollView>
    </Container>
  );
};

Gallery.navigationOptions = {
  title: 'Galeria',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default Gallery;

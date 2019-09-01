import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  SearchBar,
  Filter,
  ImageContainer,
  Image,
  Photos,
  LoadingContainer,
  News,
  Title,
} from './styles';

import api from '~/services/api';

const listTags = [
  { id: 1, title: 'Tudo' },
  { id: 2, title: 'Sala', icon: 'weekend' },
  { id: 3, title: 'Jantar', icon: 'restaurant' },
  { id: 4, title: 'Quarto', icon: 'airline-seat-individual-suite' },
  { id: 5, title: 'Banheiro' },
  { id: 6, title: 'Terraço' },
];

const BOX_SIZE = Dimensions.get('window').width / 2 - 12;

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [newsImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);

  async function fetchImages() {
    setLoading(true);
    if (index === 1) {
      const imgs = await api.get('/gallery');
      const news = await api.get('/gallery?tag=novidade');
      setImages(imgs.data);
      setNewImages(news.data);
    } else {
      const imgs = await api.get('/gallery?tag=sala');
      setImages(imgs.data);
    }
    setLoading(false);
  }

  function handleTagButton(id_) {
    setIndex(id_);
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
          {loading || index !== 1 ? null : <Title>Novidades</Title>}
          {loading || index !== 1 ? null : (
            <News
              data={newsImages}
              keyExtractor={image => String(image.id)}
              renderItem={item => {
                return (
                  <ImageContainer
                    style={{ height: BOX_SIZE, width: BOX_SIZE }}
                    onPress={() => {
                      props.navigation.navigate('GalleryImage', {
                        info: item.item,
                      });
                    }}
                  >
                    <Image source={{ uri: item.item.image.path }} />
                  </ImageContainer>
                );
              }}
              _
            />
          )}
          {loading ? null : <Title>Inspira-se</Title>}
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
                  <ImageContainer
                    style={{ height: BOX_SIZE, width: BOX_SIZE }}
                    onPress={() => {
                      props.navigation.navigate('GalleryImage', {
                        info: item.item,
                      });
                    }}
                  >
                    <Image source={{ uri: item.item.image.path }} />
                  </ImageContainer>
                );
              }}
              _
            />
          )}
        </Container>
      </ScrollView>
    </Container>
  );
};

Gallery.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    isFirstRouteInParent: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

Gallery.navigationOptions = {
  title: 'Galeria',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default Gallery;

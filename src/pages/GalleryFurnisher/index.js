import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  SearchBar,
  ImageContainer,
  Image,
  Photos,
  LoadingContainer,
  Title,
} from './styles';

import api from '~/services/api';

const BOX_SIZE = Dimensions.get('window').width / 2 - 12;

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    setLoading(true);
    const imgs = await api.get('/gallery');
    setImages(imgs.data);
    setLoading(false);
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
          {loading ? null : <Title>Fornecedor</Title>}
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

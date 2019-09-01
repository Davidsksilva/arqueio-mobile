import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Dimensions } from 'react-native';

import Description from '~/components/Description';
import Products from '~/components/Products';

import {
  Container,
  Image,
  Photos,
  ImageContainer,
  ImageSimilar,
  Title,
  LoadingContainer,
} from './styles';

import api from '~/services/api';

const BOX_SIZE = Dimensions.get('window').width / 2 - 12;

const GalleryImage = props => {
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageInfo = props.navigation.getParam('info');

  async function fetchImages() {
    setLoading(true);
    const imgs = await api.get('/gallery?tag=novidade');
    setNewImages(imgs.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <Image source={{ uri: imageInfo.image.path }} />
      <Description text={imageInfo.description} />
      <Products />
      {loading ? null : <Title>Imagens Semelhantes</Title>}
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator color="#333" size="large" />
        </LoadingContainer>
      ) : (
        <Photos
          data={newImages}
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
                <ImageSimilar source={{ uri: item.item.image.path }} />
              </ImageContainer>
            );
          }}
          _
        />
      )}
    </Container>
  );
};

GalleryImage.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    isFirstRouteInParent: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

GalleryImage.navigationOptions = {
  title: 'Galeria',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default GalleryImage;

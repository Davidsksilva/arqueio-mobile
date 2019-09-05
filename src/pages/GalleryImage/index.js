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
  TitleFurnisher,
  DescriptionFurnisher,
  LoadingContainer,
  ButtonsContainer,
  Button,
  ButtonFurnisher,
  FurnisherNews,
} from './styles';

import api from '~/services/api';

const BOX_SIZE = (Dimensions.get('window').width - 40) / 2;

const GalleryImage = props => {
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageInfo = props.navigation.getParam('info');

  async function fetchImages() {
    setLoading(true);
    const imgs = await api.get('/gallery');
    setNewImages(imgs.data);
    setLoading(false);
  }

  function goToFurnisher() {
    props.navigation.navigate('GalleryFurnisher');
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <Image source={{ uri: imageInfo.image.path }} />
      <Description text={imageInfo.description} furnisher={goToFurnisher} />
      {loading ? null : <Title>Veja mais da Italínea</Title>}
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator color="#333" size="large" />
        </LoadingContainer>
      ) : (
        <FurnisherNews
          data={newImages}
          keyExtractor={image => String(image.id)}
          renderItem={item => {
            return (
              <ImageContainer
                style={{
                  height: BOX_SIZE,
                  width: BOX_SIZE,
                  marginRight: 10,
                }}
              >
                <ImageSimilar source={{ uri: item.item.image.path }} />
              </ImageContainer>
            );
          }}
          _
        />
      )}
      <Products />
      <ButtonsContainer>
        <Button icon="local-mall">Loja</Button>
        <Button icon="archive">Salvar</Button>
        <Button icon="3d-rotation">3D</Button>
      </ButtonsContainer>
      <TitleFurnisher>Conheça o fornecedor</TitleFurnisher>
      <DescriptionFurnisher>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </DescriptionFurnisher>
      <ButtonsContainer>
        <ButtonFurnisher icon="open-in-new">Site</ButtonFurnisher>
        <ButtonFurnisher icon="local-phone">Contato</ButtonFurnisher>
        <ButtonFurnisher icon="place">Endereço</ButtonFurnisher>
        <ButtonFurnisher icon="person-add">Sociais</ButtonFurnisher>
      </ButtonsContainer>
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

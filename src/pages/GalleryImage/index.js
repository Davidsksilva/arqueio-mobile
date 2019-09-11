import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Dimensions, Linking } from 'react-native';

import FastImage from 'react-native-fast-image';
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
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const imageInfo = props.navigation.getParam('info');
  console.log(imageInfo);

  async function loadMore() {
    const nextPage = page + 1;

    const response = await api.get('/gallery', {
      params: { page: nextPage },
    });

    const updatedImages = newImages.concat(response.data);
    setNewImages(updatedImages);
    setPage(nextPage);
  }

  async function refreshList() {
    setRefreshing(true);
    const imgs = await api.get('/gallery');
    setNewImages(imgs.data);
    setRefreshing(false);
  }

  useEffect(() => {
    setPage(1);
  }, []);

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
      <Description
        name={imageInfo.sponsor === null ? null : imageInfo.sponsor.name}
        logo={
          imageInfo.sponsor === null ? null : imageInfo.sponsor.imageUrl.path
        }
        text={imageInfo.sponsor.description}
        furnisher={goToFurnisher}
        tags={imageInfo.tags}
      />
      {loading ? null : (
        <Title>
          Veja mais da{' '}
          {imageInfo.sponsor !== null
            ? imageInfo.sponsor.name
            : ' Forncededora'}
        </Title>
      )}
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
                onPress={() => {
                  props.navigation.navigate('GalleryImage', {
                    info: item.item,
                  });
                }}
              >
                <FastImage
                  style={{
                    flex: 1,
                    borderRadius: 10,
                  }}
                  source={{
                    // uri: item.item.image.path,
                    uri: `https://aunyldqfdm.cloudimg.io/width/${Math.floor(
                      BOX_SIZE
                    )}/x/${item.item.image.path}`,
                    priority: FastImage.priority.normal,
                  }}
                  // ,
                />
              </ImageContainer>
            );
          }}
          _
        />
      )}
      <Products />
      <ButtonsContainer>
        <ButtonFurnisher icon="open-in-new">Site</ButtonFurnisher>
        <ButtonFurnisher
          icon="local-phone"
          onPress={() => {
            Linking.openURL(`tel:${imageInfo.sponsor.contact}`);
          }}
        >
          Contato
        </ButtonFurnisher>
        <ButtonFurnisher
          icon="place"
          onPress={() => {
            const str = imageInfo.sponsor.address.split(' ').join('+');
            Linking.openURL(`https://www.google.com.br/maps/search/${str}`);
          }}
        >
          Endereço
        </ButtonFurnisher>
        <ButtonFurnisher
          icon="person-add"
          onPress={() => {
            Linking.openURL(`mailto:${imageInfo.sponsor.email}`);
          }}
        >
          Sociais
        </ButtonFurnisher>
      </ButtonsContainer>
      {loading ? null : <Title>Imagens Semelhantes</Title>}
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator color="#333" size="large" />
        </LoadingContainer>
      ) : (
        <Photos
          onRefresh={refreshList}
          refreshing={refreshing}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
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
                <FastImage
                  style={{
                    flex: 1,
                    borderRadius: 10,
                  }}
                  source={{
                    // uri: item.item.image.path,
                    uri: `https://aunyldqfdm.cloudimg.io/width/${Math.floor(
                      BOX_SIZE
                    )}/x/${item.item.image.path}`,
                    priority: FastImage.priority.normal,
                  }}
                  // ,
                />
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

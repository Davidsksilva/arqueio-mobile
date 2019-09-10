import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import {
  Container,
  SearchBar,
  Filter,
  ImageContainer,
  Photos,
  LoadingContainer,
  News,
  Title,
} from './styles';

import api from '~/services/api';

const listTags = [
  { id: 1, title: 'Tudo' },
  { id: 2, title: 'Estar' },
  { id: 3, title: 'Jantar' },
  { id: 4, title: 'Quarto' },
  { id: 5, title: 'Cozinha' },
  { id: 6, title: 'Banheiro' },
  { id: 7, title: 'Escritório' },
  { id: 8, title: 'Jardim' },
];

const BOX_SIZE = (Dimensions.get('window').width - 40) / 2;

const Gallery = props => {
  const [images, setImages] = useState([]);
  const [newsImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const [searchImage, setSearchImage] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  async function loadMore() {
    const nextPage = page + 1;

    if (index === 1) {
      const response = await api.get('/gallery', {
        params: { page: nextPage },
      });

      const updatedImages = images.concat(response.data);

      setImages(updatedImages);
    } else if (index > 1) {
      const response = await api.get('/gallery', {
        params: {
          page: nextPage,
          tag: listTags[index - 1].title.toLowerCase(),
        },
      });

      const updatedImages = images.concat(response.data);

      setImages(updatedImages);
    }

    setPage(nextPage);
  }

  async function refreshList() {
    setRefreshing(true);

    if (index === 1) {
      const imgs = await api.get('/gallery');
      const news = await api.get('/gallery?tag=novidade');
      setImages(imgs.data);
      setNewImages(news.data);
    } else if (index > 1) {
      const imgs = await api.get(
        `/gallery?tag=${listTags[index - 1].title.toLowerCase()}`
      );
      setImages(imgs.data);
    }

    setRefreshing(false);
  }

  useEffect(() => {
    setPage(1);
  }, [index]);

  async function fetchImages() {
    setLoading(true);
    if (index === 1) {
      const imgs = await api.get('/gallery');
      const news = await api.get('/gallery?tag=novidade');
      setImages(imgs.data);
      setNewImages(news.data);
    } else if (index > 1) {
      const imgs = await api.get(
        `/gallery?tag=${listTags[index - 1].title.toLowerCase()}`
      );
      setImages(imgs.data);
    }
    setLoading(false);
  }

  async function fetchSearchImages() {
    setLoading(true);
    setIndex(0);
    const imgs = await api.get(
      `/gallery?filter=${searchImage.split(' ').join('%20')}`
    );
    setImages(imgs.data);
    setLoading(false);
  }

  function handleTagButton(id_) {
    setIndex(id_);
  }

  useEffect(() => {
    fetchImages();
  }, [index]);

  return (
    <Container>
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="Busque uma inspiração"
            autoCapitalize="none"
            onPress={() => fetchSearchImages()}
            onChangeText={setSearchImage}
            returnKeyType="send"
            onSubmitEditing={fetchSearchImages}
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
            />
          )}
          {loading ? null : <Title>Inspire-se</Title>}
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
              data={images}
              keyExtractor={image => String(image.id)}
              columnWrapperStyle={{
                flex: 1,
                justifyContent: 'space-around',
              }}
              renderItem={item => {
                return (
                  <ImageContainer
                    style={{ height: BOX_SIZE + 50, width: BOX_SIZE }}
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
                        uri: `https://aunyldqfdm.cloudimg.io/height/${Math.floor(
                          BOX_SIZE + 50
                        )}/x/${item.item.image.path}`,
                        priority: FastImage.priority.normal,
                      }}
                    />
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

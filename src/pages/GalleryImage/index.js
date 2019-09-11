import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Dimensions, Linking, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

import FastImage from 'react-native-fast-image';
import Description from '~/components/Description';
import Products from '~/components/Products';

import {
  Container,
  Image,
  Photos,
  ImageContainer,
  Title,
  LoadingContainer,
  ButtonsContainer,
  Button,
  List,
  ButtonFurnisher,
  FurnisherNews,
  ChatItemOutter,
  ChatItemAvatar,
  ChatItemContent,
  ChatItemInner,
  ChatItemRow,
  ChatItemDateText,
  ChatItemText,
  ChatItemTextName,
  ContainerModal,
  ContainerBottomModal,
} from './styles';

import api from '~/services/api';

const BOX_SIZE = (Dimensions.get('window').width - 40) / 2;

const GalleryImage = props => {
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);

  const { navigate } = props.navigation;
  const messages = useSelector(state => state.messages);
  const imageInfo = props.navigation.getParam('info');

  console.log(imageInfo);

  function getUsers() {
    return messages.map(e => {
      const lastMsg = e.messages.length ? e.messages[0] : null;
      return {
        ...e.user,
        lastMsg,
      };
    });
  }

  function openChat(receivingUser) {
    setModalVisible(false);
    navigate('OneChat', { receivingUser, post: imageInfo });
  }

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

  function openModal(param) {
    setModalVisible(param);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <Modal
        isVisible={isModalVisible}
        animationInTiming={100}
        animationOutTiming={100}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <ContainerModal>
          <List
            data={getUsers()}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ChatItemOutter onPress={() => openChat(item)}>
                <ChatItemInner>
                  <ChatItemAvatar
                    source={item.avatar ? { uri: item.avatar.path } : avatar}
                  />
                  <ChatItemContent>
                    <ChatItemRow>
                      <ChatItemTextName>{item.name}</ChatItemTextName>
                      <ChatItemDateText>
                        {item.lastMsg &&
                          format(
                            parseISO(item.lastMsg.createdAt),
                            'HH:mm',
                            locale
                          )}
                      </ChatItemDateText>
                    </ChatItemRow>
                    <ChatItemRow>
                      <ChatItemText>
                        {item.lastMsg
                          ? item.lastMsg.user.name !== item.name
                            ? `Você: ${item.lastMsg.text}`
                            : `${item.name}: ${item.lastMsg.text}`
                          : ''}
                      </ChatItemText>
                    </ChatItemRow>
                  </ChatItemContent>
                </ChatItemInner>
              </ChatItemOutter>
            )}
          />
          <ContainerBottomModal>
            <Button
              onPress={() => {
                openModal(false);
              }}
            >
              Fechar
            </Button>
          </ContainerBottomModal>
        </ContainerModal>
      </Modal>
      <Image source={{ uri: imageInfo.image.path }} />
      <Description
        send={openModal}
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

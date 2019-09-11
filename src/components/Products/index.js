import React from 'react';
import { TouchableHighlight } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import PropTypes from 'prop-types';

import notFound from '~/assets/404.png';

import {
  Container,
  Title,
  SubTitle,
  Image,
  Details,
  DetailsText,
  ContainerButtonsSlider,
  ButtonSlider,
} from './styles';

const images = [notFound];

const Products = ({ products, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>O que está nessa imagem?</Title>
      {products === null ? (
        <SubTitle>products.titles</SubTitle>
      ) : (
        <SubTitle>Imagem não encontrada</SubTitle>
      )}
      <ImageSlider
        loopBothSides
        images={images}
        customSlide={({ index, item, style }) => {
          return (
            <Container key={index} style={[style]}>
              <Image source={item} style={{ height: 300 }} />
            </Container>
          );
        }}
        customButtons={(position, move) => (
          <ContainerButtonsSlider>
            {images.map((image, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  underlayColor="#ccc"
                  onPress={() => move(index)}
                >
                  <ButtonSlider
                    style={position === index && { backgroundColor: '#4d4d4d' }}
                  />
                </TouchableHighlight>
              );
            })}
          </ContainerButtonsSlider>
        )}
      />
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.objectOf(
    PropTypes.shape({
      urls: PropTypes.arrayOf(PropTypes.string.isRequired),
      titles: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ).isRequired,
};

export default Products;

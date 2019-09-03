import React from 'react';
import { TouchableHighlight } from 'react-native';
import ImageSlider from 'react-native-image-slider';

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

const images = [
  'https://placeimg.com/640/640/nature',
  'https://placeimg.com/640/640/people',
  'https://placeimg.com/640/640/animals',
  'https://placeimg.com/640/640/beer',
];

const details = [
  { key: 'Material: Polipropileno' },
  { key: 'Base: Madeira e metal' },
  { key: 'Dimensões (LxPxA) : 47 x 40 x 80cm' },
  { key: 'Altura do Assento: 45 cm' },
  { key: 'Peso Máximo Suportado: 100 Kg' },
];

const Products = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Title>O que está nessa imagem?</Title>
      <SubTitle>Cadeira Charles Eames Eiffel Dkr Wood</SubTitle>
      <ImageSlider
        loopBothSides
        images={images}
        customSlide={({ index, item, style }) => {
          return (
            <Container key={index} style={[style]}>
              <Image source={{ uri: item }} style={{ height: 300 }} />
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
      <Details
        data={details}
        renderItem={item => {
          return <DetailsText>{item.item.key}</DetailsText>;
        }}
        _
      />
    </Container>
  );
};

export default Products;

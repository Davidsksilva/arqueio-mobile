import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Top,
  Left,
  Right,
  Bottom,
  Text,
  Button,
  Image,
  ShowMore,
} from './styles';

const Description = ({ logo, name, text, tags, furnisher, ...rest }) => {
  return (
    <Container {...rest}>
      <Top>
        <Left>
          <Image resizeMode="stretch" source={{ uri: logo }} />
        </Left>
        <Right>
          <Button icon="send" color="#3398f4">
            Enviar
          </Button>
          <Button icon="archive" color="#3398f4">
            Salvar
          </Button>
        </Right>
      </Top>
      <Bottom>
        <Text>{text}</Text>
        <ShowMore>... visualiar mais</ShowMore>
      </Bottom>
    </Container>
  );
};

Description.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  furnisher: PropTypes.func.isRequired,
};

export default Description;

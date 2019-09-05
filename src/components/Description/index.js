import React from 'react';
import PropTypes from 'prop-types';

import { Container, Top, Left, Right, Bottom, Text, Button } from './styles';

const Description = ({ logo, text, tags, furnisher, ...rest }) => {
  return (
    <Container {...rest}>
      <Top>
        <Left>
          <Text onPress={furnisher}>Italinea</Text>
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
      </Bottom>
    </Container>
  );
};

Description.propTypes = {
  logo: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  text: PropTypes.string.isRequired,
  furnisher: PropTypes.func.isRequired,
};

export default Description;

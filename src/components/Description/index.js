import React from 'react';
import PropTypes from 'prop-types';

import { Container, Top, Left, Right, Bottom, Text, Button } from './styles';

const Description = ({ logo, text, tags, ...rest }) => {
  return (
    <Container {...rest}>
      <Top>
        <Left>
          <Text>Italinea</Text>
        </Left>
        <Right>
          <Button icon="send">Enviar</Button>
          <Button icon="archive">Salvar</Button>
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
};

export default Description;

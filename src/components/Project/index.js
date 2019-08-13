import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Left, Info, Cover, Title, Description } from './styles';
import placeholder from '~/assets/logo.png';

const Project = ({ title, description, ...rest }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container {...rest}>
        <Left>
          <Cover source={placeholder} />

          <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Info>
        </Left>
      </Container>
    </TouchableOpacity>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Project.defaultProps = {
  description: 'Sem descrição',
};

export default Project;

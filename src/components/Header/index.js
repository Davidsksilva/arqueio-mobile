import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, Left, Right, Title } from './styles';

const Header = ({ title, icon, ...rest }) => {
  return (
    <Container {...rest}>
      <Left>
        <Title>{title}</Title>
      </Left>
      <Right>
        <Icon name="md-person" size={35} color="#DEDEDE" />
      </Right>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Header.defaultProps = {
  icon: 'none',
};

export default Header;

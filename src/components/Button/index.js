import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

const Button = ({ children, loading, textColor, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={{ color: textColor }}>{children}</Text>
      )}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  textColor: '#fefefe',
};

export default Button;

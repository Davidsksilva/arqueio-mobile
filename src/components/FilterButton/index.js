import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text, ButtonContainer } from './styles';

const FilterButton = ({
  children,
  loading,
  textColor,
  textSize,
  borderWidth,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ButtonContainer>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={{ color: textColor, fontSize: textSize }}>
            {children}
          </Text>
        )}
      </ButtonContainer>
    </Container>
  );
};

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  loading: PropTypes.bool,
};

FilterButton.defaultProps = {
  loading: false,
  textColor: '#fefefe',
  textSize: 16,
};

export default FilterButton;

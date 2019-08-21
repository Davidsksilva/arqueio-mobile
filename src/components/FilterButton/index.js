import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Text, ButtonContainer } from './styles';

const FilterButton = ({
  children,
  loading,
  textColor,
  textSize,
  icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonContainer>
          {icon ? <Icon name="md-search" size={28} color="#3b9eff" /> : null}
          <Text style={{ color: textColor, fontSize: textSize }}>
            {children}
          </Text>
        </ButtonContainer>
      )}
    </Container>
  );
};

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  loading: PropTypes.bool,
  icon: PropTypes.string,
};

FilterButton.defaultProps = {
  loading: false,
  textColor: '#fefefe',
  textSize: 16,
  icon: null,
};

export default FilterButton;

import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text, ButtonContainer } from './styles';

const FilterButton = ({
  children,
  loading,
  textColor,
  textSize,
  icon,
  isColumnDirection,
  onPress,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonContainer
          onPress={onPress}
          style={isColumnDirection && { flexDirection: 'column' }}
        >
          {icon ? <Icon name={icon} size={20} color={textColor} /> : null}
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
  onPress: PropTypes.func,
  isColumnDirection: PropTypes.bool,
};

FilterButton.defaultProps = {
  loading: false,
  textColor: '#c4c4c4',
  textSize: 16,
  icon: null,
  onPress: null,
  isColumnDirection: false,
};

export default FilterButton;

import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Right, TInput } from './styles';

const Search = ({ style, onPress, iconColor, iconName, ...rest }) => {
  return (
    <Container style={style} onPress={onPress}>
      <Left>
        <Icon name={iconName} size={28} color={iconColor} />
      </Left>
      <Right>
        <TInput {...rest} />
      </Right>
    </Container>
  );
};

Search.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};

Search.defaultProps = {
  style: {},
};

export default Search;

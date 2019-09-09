import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Left, Right, TInput } from './styles';

const Search = ({ style, onPress, ...rest }) => {
  return (
    <Container style={style}>
      <Left onPress={onPress}>
        <Icon name="md-search" size={28} color="#3b9eff" />
      </Left>
      <Right>
        <TInput {...rest} />
      </Right>
    </Container>
  );
};

Search.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Search.defaultProps = {
  style: {},
};

export default Search;

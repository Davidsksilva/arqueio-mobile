import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

import globalStyle from '~/styles/global';

const Header = ({ title, icon, navigation, ...rest }) => {
  return (
    <Container {...rest}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {
          <Icon
            name="chevron-left"
            size={35}
            color={
              navigation.isFirstRouteInParent()
                ? globalStyle.secondary
                : globalStyle.primary
            }
          />
        }
      </TouchableOpacity>

      <Title>{title}</Title>
      <TouchableOpacity onPress={() => navigation.navigate('Options')}>
        <Icon name="settings" size={35} color={globalStyle.primary} />
      </TouchableOpacity>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    isFirstRouteInParent: PropTypes.func,
  }).isRequired,
};

Header.defaultProps = {
  icon: 'none',
};

export default Header;

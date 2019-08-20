import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

import globalStyle from '~/styles/global';

const Header = ({ title, icon, navigation, color, ...rest }) => {
  function getBackColor() {
    if (navigation.isFirstRouteInParent() && color === globalStyle.secondary) {
      return globalStyle.secondary;
    }
    if (color === globalStyle.secondary) {
      return globalStyle.primary;
    }
    return globalStyle.secondary;
  }

  function getActionColor() {
    if (color === globalStyle.secondary) {
      return globalStyle.primary;
    }
    return globalStyle.secondary;
  }

  function renderRightAction() {
    switch (navigation.state.routeName) {
      case 'Profile':
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Options')}>
            <Icon name="settings" size={30} color={getActionColor()} />
          </TouchableOpacity>
        );

      case 'Options':
        return <></>;

      default:
        return (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" size={30} color={getActionColor()} />
          </TouchableOpacity>
        );
    }
  }

  return (
    <Container color={color} {...rest}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {<Icon name="chevron-left" size={35} color={getBackColor()} />}
        </TouchableOpacity>

        <Title style={{ color: getActionColor() }}>{title}</Title>
      </View>

      {renderRightAction()}
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
    isFirstRouteInParent: PropTypes.func,
    state: PropTypes.shape({
      routeName: PropTypes.string,
    }),
  }).isRequired,
};

Header.defaultProps = {
  icon: 'none',
};

export default Header;

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Notifications = () => {
  return (
    <View>
      <Text>Notificações</Text>
    </View>
  );
};

Notifications.navigationOptions = {
  tabBarLabel: 'Notificações',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-notifications" size={28} color={tintColor} />
  ),
  title: 'Notificações',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Notifications;

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
  title: 'Notificações',
  headerStyle: {
    backgroundColor: '#fff',
  },
};

export default Notifications;

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Chat = () => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

Chat.navigationOptions = {
  tabBarLabel: 'Conversas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-chatboxes" size={28} color={tintColor} />
  ),
  title: 'Conversas',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Chat;

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Archive = () => {
  return (
    <View>
      <Text>Arquivos</Text>
    </View>
  );
};

Archive.navigationOptions = {
  tabBarLabel: 'Arquivos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-archive" size={28} color={tintColor} />
  ),
  title: 'Arquivos',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Archive;

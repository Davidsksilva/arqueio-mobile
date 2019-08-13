import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyProjects = () => {
  return (
    <View>
      <Text>Meus Projetos</Text>
    </View>
  );
};

MyProjects.navigationOptions = {
  tabBarLabel: 'Projetos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-home" size={20} color={tintColor} />
  ),
  title: 'Projetos',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default MyProjects;

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Gallery = () => {
  return (
    <View>
      <Text>Galeria</Text>
    </View>
  );
};

Gallery.navigationOptions = {
  tabBarLabel: 'Galeria',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-search" size={28} color={tintColor} />
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

export default Gallery;

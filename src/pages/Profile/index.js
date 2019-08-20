import React from 'react';
import { View, Text } from 'react-native';

import globalStyle from '~/styles/global';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

Profile.navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: globalStyle.primary,
  },
};

export default Profile;

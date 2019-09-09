import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Styles from './Styles';

const TaskButton = (props) => {

  return(
    <View>
      <Button
        buttonStyle={Styles.buttonStyle}
        icon={
          <Icon 
            name='md-add-circle-outline'
            color='#3398F4'
            size={40}/>
        }/>
    </View>
  );

}

export default TaskButton;
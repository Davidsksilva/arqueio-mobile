import React, { useState } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Styles from './Styles';

const FeedTagsNav = (props) => {

  const [index, setIndex] = useState(0);
  const buttons = props.buttons
  
  const getIndexResponse = async (id) => {
    setIndex(id);
    props.callback(id);
  }

  return(
    <View>
      <ButtonGroup
        onPress={getIndexResponse}
        selectedIndex={index}
        buttons={buttons}
        containerStyle={Styles.containerStyle}
        buttonStyle={Styles.buttonStyle}
        textStyle={Styles.textStyle}
        selectedButtonStyle={Styles.selectedButtonStyle} 
        innerBorderStyle={Styles.innerBorderStyle} />
    </View>
  
  );

}

export default FeedTagsNav;
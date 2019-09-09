import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Style from './Styles';

const ChatBox = (props) => {

  const goToConversation = () => {
    props.navigation.navigate('OneChat', {
      profileName: props.profileName,
      profileImage: props.profileImage,
      profileInitialMessage: props.lastMessage
    });
  }

  return(
    <View>
      
      <TouchableOpacity style={Style.touchableConatinerStyle} onPress={goToConversation}>

        <Image source={props.profileImage} style={Style.profileImageStyle}/>

        <View style={{flex:1, marginLeft: 15}}>
          <Text style={Style.profileNameStyle}>{props.profileName}</Text>
          <Text numberOfLines={1}>{props.lastMessage}</Text>
        </View>

        <View style={Style.rightSideStyle}>
          <Text>18:13</Text>
          <View style={Style.alertStyle}>
            <Text>1</Text>
          </View>
        </View>

      </TouchableOpacity>

    </View>
  );

}

export default ChatBox;
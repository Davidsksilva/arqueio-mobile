import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import { openChat, sendMessage } from '~/store/';

const OneChat = props => {
  const [messagesState, setMessagesState] = useState([]);

  const user = useSelector(state => ({
    id: state.user.profile.id,
    name: state.user.profile.name,
    email: state.user.profile.email,
  }));
  const receiver = props.navigation.getParam('receivingUser');

  const messages = useSelector(state => {
    const conversations = state.messages;

    const result = conversations.filter(e => e.id === receiver.id);

    if (!result || !result.length) {
      return [];
    }

    return result[0].messages;
  });

  function send(message) {
    sendMessage(message.text, user, receiver);
  }

  useEffect(() => {
    openChat({ user, receiver });
  }, []);

  /* const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'lastMessage',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: null,
      },
    },
  ]); */

  return (
    <View style={{ flex: 1, height: '100%' }}>
      <GiftedChat
        messages={messages}
        onSend={message => send(message[0])}
        user={{
          _id: user.id,
        }}
      />
    </View>
  );
};

OneChat.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('receivingUser').name,
  headerStyle: {
    backgroundColor: '#3398f4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default OneChat;

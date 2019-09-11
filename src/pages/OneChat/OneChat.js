import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import { openChat, sendMessage } from '~/store/';

import defaultAvatar from '~/assets/avatar.png';

const OneChat = props => {
  const { navigate, getParam } = props.navigation;
  const user = useSelector(state => ({
    id: state.user.profile.id,
    name: state.user.profile.name,
    email: state.user.profile.email,
    avatar: state.user.profile.avatar,
  }));
  const receiver = getParam('receivingUser');

  const messages = useSelector(state => {
    const conversations = state.messages;

    const result = conversations.filter(e => e.id === receiver.id);

    if (!result || !result.length) {
      return [];
    }

    result[0].messages.forEach(m => {
      m.user.avatar = result[0].user.avatar ? result[0].user.avatar.path : null;

      if (!m.user.avatar) {
        m.user.avatar = receiver.image ? receiver.image.path : defaultAvatar;
      }

      if (m.data) {
        m.image.image = m.data.image.path;
        m.text = (
          <Text
            onPress={() => {
              navigate('GalleryImage', { info: m.data });
            }}
          >
            {m.text}
          </Text>
        );
      }

      m.read = true;
    });

    return result[0].messages;
  });

  function send(message) {
    sendMessage(message.text, user, receiver, null);
  }

  useEffect(() => {
    openChat({ user, receiver });
    const post = props.navigation.getParam('receivingPost');
    if (post) {
      sendMessage('Cheque essa referência!', user, receiver, post);
    }
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

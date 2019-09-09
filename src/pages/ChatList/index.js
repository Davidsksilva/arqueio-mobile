import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import avatar from '~/assets/00_Teste/Profile_01.jpg';
import global from '~/styles/global';

import {
  ChatItemText,
  ChatItemTextName,
  Container,
  SearchBar,
  List,
  ChatItemOutter,
  ChatItemAvatar,
  ChatItemContent,
  ChatItemInner,
  ChatItemRow,
} from './styles';
import { openChat } from '~/store';

const ChatList = props => {
  const contacts = useSelector(state => state.contacts.users);

  function openChat(receivingUser) {
    props.navigation.navigate('OneChat', { receivingUser });
  }

  return (
    <Container>
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="busque em uma conversa."
            autoCapitalize="none"
          />
          <List
            data={contacts}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ChatItemOutter onPress={() => openChat(item)}>
                <ChatItemInner>
                  <ChatItemAvatar
                    source={item.image.path ? { uri: item.image.path } : avatar}
                  />
                  <ChatItemContent>
                    <ChatItemRow>
                      <ChatItemTextName>{item.name}</ChatItemTextName>
                      <ChatItemText>00:00</ChatItemText>
                    </ChatItemRow>
                    <ChatItemRow>
                      <ChatItemText />
                      <ChatItemText>
                        <MaterialIcon
                          name="lens"
                          size={10}
                          color={global.primary}
                        />
                      </ChatItemText>
                    </ChatItemRow>
                  </ChatItemContent>
                </ChatItemInner>
              </ChatItemOutter>
            )}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};

ChatList.navigationOptions = {
  tabBarLabel: 'Conversas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-chatboxes" size={28} color={tintColor} />
  ),
  title: 'Conversas',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#03A9F4',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ChatList;

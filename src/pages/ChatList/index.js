/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Date, { format, parseISO } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import avatar from '~/assets/avatar.png';
import global from '~/styles/global';

import {
  ChatItemDateText,
  ChatItemText,
  ChatItemTextName,
  Container,
  SearchBar,
  List,
  Filter,
  ChatItemOutter,
  ChatItemAvatar,
  ChatItemContent,
  ChatItemInner,
  ChatItemRow,
} from './styles';

const listTags = [
  { id: 1, title: 'Todos' },
  { id: 2, title: '' },
  { id: 3, title: '' },
];

const ChatList = props => {
  const { navigate } = props.navigation;
  const [index, setIndex] = useState(1);
  // const contacts = useSelector(state => state.contacts.users);
  const messages = useSelector(state => state.messages);

  function getUsers() {
    return messages.map(e => {
      const lastMsg = e.messages.length ? e.messages[0] : null;
      return {
        ...e.user,
        lastMsg,
      };
    });
  }

  function openChat(receivingUser) {
    navigate('OneChat', { receivingUser });
  }

  function handleTagButton(id_) {
    setIndex(id_);
  }

  return (
    <Container>
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="busque em uma conversa."
            autoCapitalize="none"
          />
          <Filter tags={listTags} handleButton={handleTagButton} />
          <List
            data={getUsers()}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ChatItemOutter onPress={() => openChat(item)}>
                <ChatItemInner>
                  <ChatItemAvatar
                    source={item.avatar ? { uri: item.avatar.path } : avatar}
                  />
                  <ChatItemContent>
                    <ChatItemRow>
                      <ChatItemTextName>{item.name}</ChatItemTextName>
                      <ChatItemDateText>
                        {item.lastMsg &&
                          format(
                            parseISO(item.lastMsg.createdAt),
                            'HH:mm',
                            locale
                          )}
                      </ChatItemDateText>
                    </ChatItemRow>
                    <ChatItemRow>
                      <ChatItemText>
                        {item.lastMsg
                          ? item.lastMsg.user.name !== item.name
                            ? `Você: ${item.lastMsg.text}`
                            : `${item.name}: ${item.lastMsg.text}`
                          : ''}
                      </ChatItemText>

                      {/* <ChatItemText>
                        <MaterialIcon
                          name="lens"
                          size={10}
                          color={global.primary}
                        />
                      </ChatItemText> */}
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
  headerTintColor: '#3398f4',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ChatList;

import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import avatar from '~/assets/avatar.png';
import global from '~/styles/global';

import {
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
  { id: 1, title: 'Tudo' },
  { id: 2, title: 'Projeto 01' },
  { id: 3, title: 'Projeto 02' },
];

const ChatList = props => {
  const [index, setIndex] = useState(1);
  const contacts = useSelector(state => state.contacts.users);

  function openChat(receivingUser) {
    props.navigation.navigate('OneChat', { receivingUser });
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
            data={contacts}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ChatItemOutter onPress={() => openChat(item)}>
                <ChatItemInner>
                  <ChatItemAvatar
                    source={item.image ? { uri: item.image.path } : avatar}
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
  headerTintColor: '#3398f4',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default ChatList;

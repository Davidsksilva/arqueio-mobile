import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import avatar from '~/assets/00_Teste/Profile_01.jpg';
import global from '~/styles/global';

import { gotNewUser } from '~/store/modules/contacts/actions';

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

const SearchContact = props => {
  const { navigate } = props.navigation;
  const dispatch = useDispatch();
  const [searchEmail, setSearchEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    const response = await api.get('/users/search', {
      params: {
        email: searchEmail,
      },
    });

    setUsers(response.data);
    setLoading(false);
  }

  function addContact(item) {
    dispatch(gotNewUser(item));
    navigate('ChatList');
  }

  return (
    <Container>
      <ScrollView>
        <Container>
          <SearchBar
            placeholder="busque o contato com email"
            autoCapitalize="none"
            value={searchEmail}
            onChangeText={setSearchEmail}
            onPress={() => fetchUsers()}
            returnKeyType="send"
            onSubmitEditing={fetchUsers}
          />
          <List
            data={users}
            refreshing={loading}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ChatItemOutter key={item.id} onPress={() => addContact(item)}>
                <ChatItemInner>
                  <ChatItemAvatar
                    source={item.image.path ? { uri: item.image.path } : avatar}
                  />
                  <ChatItemContent>
                    <ChatItemRow>
                      <ChatItemTextName>{item.name}</ChatItemTextName>
                    </ChatItemRow>
                    <ChatItemRow>
                      <ChatItemText>{item.email}</ChatItemText>
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

SearchContact.navigationOptions = {
  title: 'Buscar Contato',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#03A9F4',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default SearchContact;

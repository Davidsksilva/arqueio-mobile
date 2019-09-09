import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedTagsNav from '~/components/FeedTagsNav/FeedTagsNav';
import SearchBarTab from '~/components/SearchBarTab/SearchBarTab';
import TaskButton from '~/components/AddTaskButton/TaskButton';
import ChatBox from '~/components/ChatBox/ChatBox';

import Tony from '~/assets/tony.jpg';
import Avatar from '~/assets/avatar.png';

import Logo from '~/assets/logo_blue.png';
import Styles from './Styles';

import Profile1 from '~/assets/00_Teste/Profile_01.jpg';
import Profile2 from '~/assets/00_Teste/Profile_02.jpg';
import Profile3 from '~/assets/00_Teste/Profile_03.jpg';
import Profile4 from '~/assets/00_Teste/Profile_04.jpg';

const Chat = props => {
  const [index, setIndex] = useState(0);
  const [chatBoxes, setChatBoxes] = useState(null);

  async function showTasks() {
    if (index === 0) {
      setChatBoxes(
        <ScrollView>
          <ChatBox
            profileName="Arqueio"
            profileImage={Logo}
            navigation={props.navigation}
            lastMessage="Bem vindo à Arqueio! É um prazer te-lo no teste do nosso primeiro MVP!"
          />
          <ChatBox
            profileName="Cliente 01"
            profileImage={Profile1}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 01, eu participo do projeto 01."
          />
          <ChatBox
            profileName="Cliente 02"
            profileImage={Profile2}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 02, eu participo do projeto 02."
          />
          <ChatBox
            profileName="Cliente 03"
            profileImage={Profile3}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 03, eu participo do projeto 03."
          />
          <ChatBox
            profileName="Estagiário 01"
            profileImage={Profile4}
            navigation={props.navigation}
            lastMessage="Eu sou o estagiário 01, eu participo dos projetos 01 e 03."
          />
        </ScrollView>
      );
    } else if (index == 1) {
      setChatBoxes(
        <ScrollView>
          <ChatBox
            profileName="Cliente 01"
            profileImage={Profile1}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 01, eu participo do projeto 01."
          />
          <ChatBox
            profileName="Estagiário 01"
            profileImage={Profile4}
            navigation={props.navigation}
            lastMessage="Eu sou o estagiário 01, eu participo dos projetos 01 e 03."
          />
        </ScrollView>
      );
    } else if (index == 2) {
      setChatBoxes(
        <ScrollView>
          <ChatBox
            profileName="Cliente 02"
            profileImage={Profile2}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 02, eu participo do projeto 02."
          />
        </ScrollView>
      );
    } else if (index == 3) {
      setChatBoxes(
        <ScrollView>
          <ChatBox
            profileName="Cliente 03"
            profileImage={Profile3}
            navigation={props.navigation}
            lastMessage="Eu sou o cliente 03, eu participo do projeto 03."
          />
          <ChatBox
            profileName="Estagiário 01"
            profileImage={Profile4}
            navigation={props.navigation}
            lastMessage="Eu sou o estagiário 01, eu participo dos projetos 01 e 03."
          />
        </ScrollView>
      );
    } else {
      setChatBoxes(<ScrollView />);
    }
  }

  useEffect(() => {
    showTasks();
  }, [index]);

  const getIndexResponse = id => {
    setIndex(id);
  };

  return (
    <View style={Styles.containerStyle}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeedTagsNav
            buttons={[
              'Todos',
              'Projeto01',
              'Projeto02',
              'Projeto03',
              'Projeto04',
            ]}
            callback={getIndexResponse}
          />
        </ScrollView>
      </View>

      <SearchBarTab />

      {chatBoxes}

      <View style={Styles.buttonStyle}>
        <TaskButton />
      </View>
    </View>
  );
};

Chat.navigationOptions = {
  tabBarLabel: 'Conversas',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="md-chatboxes" size={28} color={tintColor} />
  ),
  title: 'Conversas',
  headerStyle: {
    backgroundColor: '#03A9F4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default Chat;

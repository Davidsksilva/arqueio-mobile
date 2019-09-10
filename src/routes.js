import React from 'react';
import ReactNavigation, {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import MyProjects from '~/pages/MyProjects';
import CreateProject from '~/pages/CreateProject';
import Gallery from '~/pages/Gallery';
import GalleryImage from '~/pages/GalleryImage';
import GalleryFurnisher from '~/pages/GalleryFurnisher';
import Notifications from '~/pages/Notifications';
import ChatList from '~/pages/ChatList';
import Archive from '~/pages/Archive';
import Options from '~/pages/Options';
import Profile from '~/pages/Profile';
import SearchContact from '~/pages/SearchContact';
import OneChat from '~/pages/OneChat/OneChat';

import Header from '~/components/Header';

import globalStyle from '~/styles/global';

const ChatStack = createStackNavigator(
  {
    ChatList,
    Options,
    Profile,
    SearchContact,
    OneChat,
  },
  {
    initialRouteName: 'ChatList',
    headerMode: 'float',

    defaultNavigationOptions: navigation => ({
      header: props => {
        // eslint-disable-next-line react/prop-types
        const { scene } = props;
        return (
          <Header
            // eslint-disable-next-line react/prop-types
            color={scene.descriptor.options.headerStyle.backgroundColor}
            // eslint-disable-next-line react/prop-types
            title={scene.descriptor.options.title}
            {...navigation}
          />
        );
      },
    }),
    cardStyle: {
      backgroundColor: globalStyle.secondary,
    },
    transitionConfig: () =>
      ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS,
  }
);

const Projects = createStackNavigator(
  {
    MyProjects,
    CreateProject,
    Options,
    Profile,
  },
  {
    initialRouteName: 'MyProjects',
    headerMode: 'float',

    defaultNavigationOptions: navigation => ({
      header: props => {
        // eslint-disable-next-line react/prop-types
        const { scene } = props;
        return (
          <Header
            // eslint-disable-next-line react/prop-types
            color={scene.descriptor.options.headerStyle.backgroundColor}
            // eslint-disable-next-line react/prop-types
            title={scene.descriptor.options.title}
            {...navigation}
          />
        );
      },
    }),
    cardStyle: {
      backgroundColor: globalStyle.secondary,
    },
    transitionConfig: () =>
      ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS,
  }
);

const GalleryStack = createStackNavigator(
  {
    Gallery,
    GalleryImage,
    GalleryFurnisher,
    Options,
    Profile,
  },
  {
    initialRouteName: 'Gallery',
    headerMode: 'float',

    defaultNavigationOptions: navigation => ({
      header: props => {
        // eslint-disable-next-line react/prop-types
        const { scene } = props;
        return (
          <Header
            // eslint-disable-next-line react/prop-types
            color={scene.descriptor.options.headerStyle.backgroundColor}
            // eslint-disable-next-line react/prop-types
            title={scene.descriptor.options.title}
            {...navigation}
          />
        );
      },
    }),
    cardStyle: {
      backgroundColor: globalStyle.secondary,
    },
    transitionConfig: () =>
      ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS,
  }
);

const NotificationStack = createStackNavigator(
  {
    Notifications,
    Options,
    Profile,
  },
  {
    initialRouteName: 'Notifications',
    headerMode: 'float',

    defaultNavigationOptions: navigation => ({
      header: props => {
        // eslint-disable-next-line react/prop-types
        const { scene } = props;
        return (
          <Header
            // eslint-disable-next-line react/prop-types
            color={scene.descriptor.options.headerStyle.backgroundColor}
            // eslint-disable-next-line react/prop-types
            title={scene.descriptor.options.title}
            {...navigation}
          />
        );
      },
    }),
    cardStyle: {
      backgroundColor: globalStyle.secondary,
    },
    transitionConfig: () =>
      ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS,
  }
);

const ArchiveStack = createStackNavigator(
  {
    Archive,
    Options,
    Profile,
  },
  {
    initialRouteName: 'Archive',
    headerMode: 'float',

    defaultNavigationOptions: navigation => ({
      header: props => {
        // eslint-disable-next-line react/prop-types
        const { scene } = props;
        return (
          <Header
            // eslint-disable-next-line react/prop-types
            color={scene.descriptor.options.headerStyle.backgroundColor}
            // eslint-disable-next-line react/prop-types
            title={scene.descriptor.options.title}
            {...navigation}
          />
        );
      },
    }),
    cardStyle: {
      backgroundColor: globalStyle.secondary,
    },
    transitionConfig: () =>
      ReactNavigation.StackViewTransitionConfigs.SlideFromRightIOS,
  }
);

const BottomTab = createBottomTabNavigator(
  {
    Projects: {
      screen: Projects,
      navigationOptions: {
        tabBarLabel: 'Projetos',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" size={28} color={tintColor} />
        ),
        title: 'Projetos',
        headerStyle: {
          backgroundColor: globalStyle.primary,
        },
        headerTintColor: globalStyle.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Gallery: {
      screen: GalleryStack,
      navigationOptions: {
        tabBarLabel: 'Galeria',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" size={28} color={tintColor} />
        ),
        title: 'Galeria',
        headerStyle: {
          backgroundColor: globalStyle.primary,
        },
        headerTintColor: globalStyle.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    Notifications: {
      screen: NotificationStack,
      navigationOptions: {
        tabBarLabel: 'Notifcações',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" size={28} color={tintColor} />
        ),
        title: 'Notifcações',
        headerStyle: {
          backgroundColor: globalStyle.primary,
        },
        headerTintColor: globalStyle.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarLabel: 'Conversas',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-chatboxes" size={28} color={tintColor} />
        ),
        title: 'Conversas',
        headerStyle: {
          backgroundColor: globalStyle.primary,
        },
        headerTintColor: globalStyle.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },

    Archive: {
      screen: ArchiveStack,
      navigationOptions: {
        tabBarLabel: 'Arquivos',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-archive" size={28} color={tintColor} />
        ),
        title: 'Arquivos',
        headerStyle: {
          backgroundColor: globalStyle.primary,
        },
        headerTintColor: globalStyle.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      keyboardHidesTabBar: true,
      activeTintColor: globalStyle.primary,
      inactiveTintColor: '#C4c4c4',
      style: {
        backgroundColor: '#fefefe',
        borderTopColor: 'transparent',
      },
    },
  }
);

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator({ BottomTab }, { headerMode: 'none' }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

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
import Notifications from '~/pages/Notifications';
import Chat from '~/pages/Chat';
import Archive from '~/pages/Archive';
import Options from '~/pages/Options';
import Profile from '~/pages/Profile';

import Header from '~/components/Header';

import globalStyle from '~/styles/global';

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
        console.tron.log(props);
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
    Notifications,
    Chat,
    Archive,
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

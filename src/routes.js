import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import MyProjects from '~/pages/MyProjects';
import Gallery from '~/pages/Gallery';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            MyProjects,
            Gallery,
          },
          {
            tabBarOptions: {
              showLabel: true,
              keyboardHidesTabBar: true,
              activeTintColor: '#3398F4',
              inactiveTintColor: '#C4c4c4',
              style: {
                backgroundColor: '#fefefe',
                borderTopColor: 'transparent',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

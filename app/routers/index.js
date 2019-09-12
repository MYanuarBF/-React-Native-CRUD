import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, UserAuthStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    App: Drawer,
    UserAuth: UserAuthStack 
  },
  {
    initialRouteName: 'UserAuth'
  }
);

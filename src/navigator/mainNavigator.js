import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings68125Navigator from '../features/Settings68125/navigator';
import UserProfile68118Navigator from '../features/UserProfile68118/navigator';
import Settings68117Navigator from '../features/Settings68117/navigator';
import Settings68115Navigator from '../features/Settings68115/navigator';
import SignIn268113Navigator from '../features/SignIn268113/navigator';
import Settings68108Navigator from '../features/Settings68108/navigator';
import UserProfile68101Navigator from '../features/UserProfile68101/navigator';
import Settings68100Navigator from '../features/Settings68100/navigator';
import Settings68098Navigator from '../features/Settings68098/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings68125: { screen: Settings68125Navigator },
UserProfile68118: { screen: UserProfile68118Navigator },
Settings68117: { screen: Settings68117Navigator },
Settings68115: { screen: Settings68115Navigator },
SignIn268113: { screen: SignIn268113Navigator },
Settings68108: { screen: Settings68108Navigator },
UserProfile68101: { screen: UserProfile68101Navigator },
Settings68100: { screen: Settings68100Navigator },
Settings68098: { screen: Settings68098Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

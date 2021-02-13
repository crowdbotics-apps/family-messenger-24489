import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile204692Navigator from '../features/UserProfile204692/navigator';
import Maps204673Navigator from '../features/Maps204673/navigator';
import Settings204651Navigator from '../features/Settings204651/navigator';
import Settings204636Navigator from '../features/Settings204636/navigator';
import NotificationList204635Navigator from '../features/NotificationList204635/navigator';
import Maps204634Navigator from '../features/Maps204634/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile204692: { screen: UserProfile204692Navigator },
Maps204673: { screen: Maps204673Navigator },
Settings204651: { screen: Settings204651Navigator },
Settings204636: { screen: Settings204636Navigator },
NotificationList204635: { screen: NotificationList204635Navigator },
Maps204634: { screen: Maps204634Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

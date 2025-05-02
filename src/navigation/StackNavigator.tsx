import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color:'#445d7a'
    },
  },
  screens: {
    Home: HomeScreen,
  },
});


const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;
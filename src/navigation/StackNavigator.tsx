import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import KeyboardAvoidScreen from '../screen/KeyboardAvoidScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'KeyboardAvoid',
  screenOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color:'#445d7a'
    },
  },
  screens: {
    KeyboardAvoid:KeyboardAvoidScreen,
    Home: HomeScreen,
  },
});


const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;
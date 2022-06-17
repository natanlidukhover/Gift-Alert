import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerStyle: {backgroundColor: '#7b199d'}, headerTintColor: '#fad157'}} initialRouteName="Home">
        <Stack.Screen name="Gift Alert" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

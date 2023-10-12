import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Map from '../screens/Map';

const Stack = createNativeStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen 
            name='login'
            component={Login}
        />
        <Stack.Screen 
            name='register'
            component={Register}
        />
        <Stack.Screen 
            name='map'
            component={Map}
        />
    </Stack.Navigator>
  );
}
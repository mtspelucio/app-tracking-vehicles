import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabRoutes from './tab.routes';
import RegisterVehicle from '../screens/RegisterVehicle';
import DetailsVehicle from '../screens/DetailsVehicle';

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
          name='tab'
          component={TabRoutes}
        />
        <Stack.Screen 
          name='registerVehicle'
          component={RegisterVehicle}
        />
        <Stack.Screen 
          name='detailsVehicle'
          component={DetailsVehicle}
        />
    </Stack.Navigator>
  );
}
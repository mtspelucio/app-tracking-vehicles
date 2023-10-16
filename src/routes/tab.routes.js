import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes({ route }){
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff', 
            tabBarInactiveTintColor: '#2D70AE',
            tabBarStyle: { 
                backgroundColor: '#1E97C6',
                borderTopWidth: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }
        }}>
            <Tab.Screen 
                name='home'
                options={{
                    tabBarIcon: ({ color, size}) => <Foundation name='home' color={color} size={size} />,
                    tabBarLabel: 'Inicio'
                }}
            >
                {(props) => <Home userData={route.params.paramKey} {...props} />}
            </Tab.Screen>
            <Tab.Screen 
                name='map'
                options={{
                    tabBarIcon: ({ color, size}) => <FontAwesome5 name='map-marker-alt' color={color} size={size} />,
                    tabBarLabel: 'Mapa'
                }}
            >
                {(props) => <Map userData={route.params.paramKey} {...props} />}
            </Tab.Screen>
            <Tab.Screen 
                name='profile'
                options={{
                    tabBarIcon: ({ color, size}) => <MaterialCommunityIcons name='account' color={color} size={size} />,
                    tabBarLabel: 'Perfil'
                }}
            >
                {(props) => <Profile userData={route.params.paramKey} {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}


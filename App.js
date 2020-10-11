
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssetExample from './components/AssetExample';
import Inicio from './components/Inicio';
import Info from './components/Info';
import Mapa from './components/Mapa';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'user'
                : 'user';
            } else if (route.name === 'Info') {
              iconName = focused ? 'phone' : 'phone';
            }else if (route.name === 'Mapa') {
              iconName = focused ? 'rocket1' : 'rocket1';
            }
           
        
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#CABFD4',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CharacterListingContainer from './Container/CharacterListingContainer'
import SearchCharacterContainer from './Container/SearchCharacterContainer'
const Tab = createMaterialBottomTabNavigator();
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={CharacterListingContainer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchCharacterContainer}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}
export default BottomTabs
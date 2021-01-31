import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/screens/SearchScreen';
import TrackScreen from './src/screens/TrackScreen';
import AlbumsScreen from './src/screens/AlbumsScreen';
import ArtistsScreen from './src/screens/ArtistsScreen';
import { MaterialIcons } from '@expo/vector-icons';
import  { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            }
            else if (route.name === 'Track') {
              iconName = focused ? 'audiotrack' : 'audiotrack';
            } else if (route.name === 'Artists') {
              iconName = focused ? 'art-track' : 'art-track';
            }
            else if (route.name === 'Albums') {
              iconName = focused ? 'album' : 'album';
            }

            // You can return any component that you like here!
            return  <MaterialIcons name={iconName} size={size} color={color}  />;


          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={SearchScreen} />
        <Tab.Screen name="Track" component={TrackScreen} />
        <Tab.Screen name="Artists" component={ArtistsScreen} />
        <Tab.Screen name="Albums" component={AlbumsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app:{
    marginBottom:200

  }
});


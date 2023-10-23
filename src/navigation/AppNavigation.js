// AppNavigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RestaurantsStack from './RestaurantsStack'; // Asegúrate de que la ruta sea correcta
import AccountStack from '../screens/AccountScreen';
import FavoriteStack from '../screens/FavoriteScreen';
import RankingStack from '../screens/RankingScreen';
import SearchStack from '../screens/SearchScreen';
import { screens } from '../utils/screenNames';

const Tab = createBottomTabNavigator();
                                                                                                                                                                                                                                                                                                                                                                                                                              
const getScreenOptionsIcons = (route) => {
  const iconName = {
    [screens.restaurants.tab]: 'compass-outline',
    [screens.favorites.tab]: 'heart-outlina',
    [screens.ranking.tab]: 'star-outline',
    [screens.search.tab]: 'search-outline',
    [screens.account.tab]: 'home-outline',
  };

  return {
    tabBarIcon: ({ focused, color, size }) => {
      return (
        <Ionicons
          name={iconName[route.name]}
          size={size}
          color={focused ? color : 'gray'}
        />
      );
    },
    headerShown: true,
  };
};

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => getScreenOptionsIcons(route)}
    >
      <Tab.Screen
        name={screens.restaurants.tab}
        component={RestaurantsStack}
        options={{
          title: screens.restaurants.restaurants,
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name={screens.favorites.tab}
        component={FavoriteStack}
        options={{
          title: screens.favorites.favorites,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name={screens.ranking.tab}
        component={RankingStack}
        options={{
          title: screens.ranking.ranking,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name={screens.search.tab}
        component={SearchStack}
        options={{
          title: screens.search.search,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name={screens.account.tab}
        component={AccountStack}
        options={{
          title: screens.account.account,
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}



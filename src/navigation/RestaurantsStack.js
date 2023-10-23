import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurantScreen';
import { screens } from '../utils/screenNames';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurants"
        component={screens.restaurants.restaurants}
       // options={{ title: 'Restaurantes' }}
      />
      <Stack.Screen
        name="AddRestaurant"
        component={screens.restaurants.add_restaurant}
       // options={{ title: 'Add Restaurant' }} 
      />
    </Stack.Navigator>
  );
};

export default MyStack;



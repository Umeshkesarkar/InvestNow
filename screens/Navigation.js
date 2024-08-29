/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import SplashScreen from '../src/screens/SplashScreen';
import Demo from '../src/screens/Demo';
import Listing from '../src/screens/Listing';
import DetailsScreen from '../src/screens/DetailsScreen';
import OrdersScreen from '../src/screens/OrdersScreen';
import LoginScreen from '../src/screens/LoginSceen';

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Listing"
                    component={Listing}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OrdersScreen"
                    component={OrdersScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Demo"
                    component={Demo}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/auth/Login';
import Home from '../screen/home/Home';


const Stack = createNativeStackNavigator();

const MainRoute = ({ initialRouteName }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute
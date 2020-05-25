import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './Auth'
import Drawer from './Drawer'
import Switched from './Switch'

const Stack = createStackNavigator()

const Real = ()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
                name = 'initial'
                component = {Switched}
                options = {{
                    headerShown:false
                }}
                />
        
        <Stack.Screen 
                    name = 'Authenticate' 
                    component = {AuthScreen}
                    options = {{
                        headerShown:false
                    }}
                    />
        
        <Stack.Screen
                 name = 'App' 
                 component = {Drawer}
                 options = {{
                     headerShown:false
                 }}
                 />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Real;
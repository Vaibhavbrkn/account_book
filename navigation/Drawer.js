import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import navAccount from './account'
import navHome from './Home'
import navBill from './billing'
import navBS from './BS'
import Head from './Header'


const Draw = createDrawerNavigator();

const Drawer = ()=>{
    return(
        
            <Draw.Navigator initialRouteName = 'Home'>
                <Draw.Screen name = 'Home' component = {navHome}/>
                <Draw.Screen name = 'Sheet' component = {navBS}/>
                <Draw.Screen name = 'Account' component = {navAccount}/>
                <Draw.Screen name = 'Bills' component = {navBill}/>
             </Draw.Navigator>
        
    )
}

export default Drawer;
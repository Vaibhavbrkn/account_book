import * as React from 'react';
import { Button, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/Auth/signIn'
import SignUp from '../screens/Auth/signUp'

const Auth = createStackNavigator()

const AuthScreen = ()=>{
    return(
        
            <Auth.Navigator>
                <Auth.Screen 
                name = 'signin' 
                component = {SignIn}
                options= {{
                    title : 'SignIn',
                    headerTitleAlign: 'center'
                }}
                />
                <Auth.Screen name = 'signup' component = {SignUp}
                options= {{
                    title : 'SignUp',
                    headerTitleAlign: 'center'
                }}
                />
            </Auth.Navigator>
        
    )
}

export default AuthScreen;
   
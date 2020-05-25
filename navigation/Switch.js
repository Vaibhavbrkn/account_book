import * as React from 'react';
import { Button, View , AsyncStorage } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './Auth'
import Drawer from './Drawer'
import Loading from '../screens/loading'
import Home from '../screens/Home/home'
import Verify from '../screens/Auth/verify'
import {useState , useEffect} from 'react'

const Stack = createStackNavigator()
    


const Switched = ()=>{
    const [userToken , setUserToken] = useState(null)
    useEffect(()=>{
        
        Token()
    })
    const Token = async()=>{
        
            const value = AsyncStorage.getItem('token')
            if(value){
                setUserToken(true)
            }
            else{
                setUserToken(false)
            }
    }
    if (userToken === null){
        return(
                <Stack.Navigator>
                <Stack.Screen
                name = 'Load'
                component = {Loading}
                />
                </Stack.Navigator>
           
        )
    }
   
    if(!userToken){
        return(
               
                    <Stack.Navigator>
                        <Stack.Screen 
                    name = 'Authenticate' 
                    component = {AuthScreen}
                    options = {{
                        headerShown:false
                    }}
                    />
                    </Stack.Navigator>
                

                )
            }else{
                return(
                
                    <Stack.Navigator>
                    <Stack.Screen
                 name = 'App' 
                 component = {Drawer}
                 options = {{
                     headerShown:false
                 }}
                 />
                    </Stack.Navigator>
                )
            }
                
}

export default Switched;
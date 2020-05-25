import * as React from 'react';
import {Text , View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../screens/Account/accounts'
import { Ionicons , MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator()

const navAccount = ({navigation})=>{
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={Account}
          options = {{
            title : 'Account',
            headerTitleAlign:'center',
            headerRight: ()=>(
                <View style = {{paddingRight:10}}>
                    <Ionicons name = 'ios-add' size = {30}/>
                </View>
            ),
            headerLeft:()=>(
              <View style = {{paddingLeft:10}}>
                  <MaterialIcons name = 'menu' size = {30} onPress = {()=>navigation.toggleDrawer()}/>
                  
              </View>
            )
            
          }}
        />
      </Stack.Navigator>
    )
}

export default navAccount;
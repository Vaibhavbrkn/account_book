import * as React from 'react';
import {Text , View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Billing from '../screens/Billing/billing'
import New from  '../screens/Billing/new'
import History from  '../screens/Billing/history'
import { Ionicons , MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator()

const navBill = ({navigation})=>{
  return(
    
      <Stack.Navigator>
        <Stack.Screen
          name="Bills"
          component={Billing}
          options = {{
            title : 'Billing',
            headerTitleAlign: 'center',
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
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name='History' component={History} />
      </Stack.Navigator>
    
  )
}

export default navBill;
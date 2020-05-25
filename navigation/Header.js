import * as React from 'react';
import {Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/home'
import bs from '../screens/Bast/BS'
import Account from '../screens/Account/accounts'
import Billing from '../screens/Billing/billing'

const Stack = createStackNavigator()

const Head = ()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options = {{
              title : 'my',
              headerRight: ()=>(
                  <Text>
                      fav
                  </Text>
              )
            }}
        />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name='Billing' component={Billing} />
        <Stack.Screen name="bs" component={bs} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Head;

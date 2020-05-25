import * as React from 'react';
import {Text , View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import bs from '../screens/Bast/BS'
import { Ionicons , MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator()

const navBS = ({navigation})=>{
    return(
    
      <Stack.Navigator>
        <Stack.Screen
          name="Balance Sheet"
          component={bs}
          options = {{
            title : 'Balance Sheet',
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
      </Stack.Navigator>
    
    )
}

export default navBS;
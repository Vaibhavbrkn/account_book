import * as React from 'react';
import {Text , View, Button} from 'react-native'
import {NavigationContainer, BaseRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Ionicons , MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home/home'
import List from  '../screens/Home/list'
import Detail from  '../screens/Home/detail'
import addName from '../screens/Home/modal'
import Models from '../screens/Home/models'

const Stack = createStackNavigator()

const navHome = ({navigation , route})=>{
  return(
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams = {{modal : false }}
          options = {{
              title : 'Home',
              headerTitleAlign:'center',
              headerRight: ()=>(
                  <View style = {{paddingRight:10}}>
                      <Ionicons name = 'ios-add' size = {30} onPress = {()=> navigation.navigate('Modal')} />
                  </View>
              ),
              headerLeft:()=>(
                <View style = {{paddingLeft:10 , }}>
                    <MaterialIcons name = 'menu' size = {30} onPress = {()=>navigation.toggleDrawer()}/>
                    
                </View>
              )
              
            }}
        />
        <Stack.Screen name="List" 
        component={List}
        options = {{
          title:'List',
          headerTitleAlign:'center',
          headerRight: ()=>(
            <View style = {{paddingRight:10}}>
                <Ionicons name = 'ios-add' size = {30} onPress = {()=> navigation.navigate('models')} />
            </View>
        )
        }}
         />
        <Stack.Screen name='Details' component={Detail} />
        <Stack.Screen name='models' component={Models}
        options = {{
          title:'Detail'
        }}
        />
        <Stack.Screen name = 'Modal' 
                  component = {addName} 
                  options = {{
                  title : 'Add Account', 
                  headerTitleStyle:{
                  textAlign : 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft : 60
                  
              }}}/>
      </Stack.Navigator>
   
  )
}

export default navHome;
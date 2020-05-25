import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native'
import * as  firebase from 'firebase'

class Loading extends React.Component{
 

  componentDidMount() {
    const token =  AsyncStorage.getItem('token')
    console.log(token)
    if(token){
      this.props.navigation.navigate('App')
    }
      else{
        this.props.navigation.navigate('Authenticate')
      }
    
  }
    render(){
      return(
          <View style={styles.container}>
          <Text>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })

  export default Loading;
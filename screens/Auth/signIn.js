import React from 'react'
import {Button,TextInput , View, Text, KeyboardAvoidingView  , StyleSheet , Image, TouchableHighlight, ScrollView, AsyncStorage} from 'react-native'
import { Ionicons , MaterialIcons } from '@expo/vector-icons'
import {useState , useEffect} from 'react'
import {API} from '../../config'


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {number : null , password: '' , errorMessage:''}
  }


  
    render(){
      const handleLogin = () => {
        const number = this.state.number
        const password = this.state.password
        const user = {number , password}
         fetch(`${API}/signin` ,{
           method:'POST',
           headers:{
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
       }).then(response=>{
           return response.json()
       }).then(async data=>{
         try{
           this.setState({errorMessage:data.error})
           await AsyncStorage.setItem('token' , data.token)
           const value = await AsyncStorage.getItem('token')
           if(value !== null){
            this.props.navigation.navigate('App')
           }
         }catch(error){
           console.log(error)
         }
       })
       .catch(err=>{
        console.log(errorMessage)
       })
       }
       
    return(

        
        <KeyboardAvoidingView style={styles.container}>

      <View style = {{padding:10}}>
      <Text style = {{color:'red'}}>
      {this.state.errorMessage}
      </Text>
    </View>

            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder = 'Phone'
                    onChangeText = {text=>this.setState({number:text})}
                    Value = {this.state.number}
                    keyboardType = {'numeric'}
                    style = {styles.inputs}
                />
            </View>
        
            
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder = 'password'
                    onChangeText = {text=>this.setState({password:text})}
                    Value = {this.state.password}
                    style = {styles.inputs}
                    secureTextEntry={true}
                />
            </View>


        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
        onPress={() =>handleLogin()}>
          <Text style={styles.signUpText}>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.inButtonContainer, styles.signupButton]} onPress={() =>this.props.navigation.navigate('signup')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableHighlight>
        <Text >
            new user? signup
        </Text>
        

       

        
      </KeyboardAvoidingView>
        
           
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:30,
          borderBottomWidth: 1,
          width:250,
          height:45,
          marginBottom:20,
          flexDirection: 'row',
          alignItems:'center'
      },
      inputs:{
          height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      signupButton: {
        backgroundColor: "#FF4DFF",
      },
      signUpText: {
        color: 'white',
      },
      inButtonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5,
        width:250,
        borderRadius:30,
      }
})

export default SignIn;
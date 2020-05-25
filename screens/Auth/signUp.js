import React from 'react'
import {Button,TextInput , View, Text, KeyboardAvoidingView  , StyleSheet , Image, TouchableHighlight, ScrollView} from 'react-native'
import { Ionicons , MaterialIcons } from '@expo/vector-icons'
import {useState} from 'react'
import * as firebase from 'firebase'
import { SocialIcon } from 'react-native-elements'
//import {signup} from '../../action/auth'
import {API} from '../../config'
import axios from 'axios'
//import { GoogleSignin } from 'react-native-google-signin';

class SignUp extends React.Component{

  constructor(props){
    super(props)
    this.state = {number : null , password: '' , errorMessage:null , email:'' , name:'' , successMessage:''}
  }

   
  componentwillMount(){
    console.log('hello')
  }

  render(){
 
    const handleSignUp = () => {
        const name = this.state.name
        const number  =this.state.number
        const email = this.state.email
        const password = this.state.password
        const user = {name , number , email , password}
        this.setState({errorMessage:null , successMessage:null})
      
        fetch(`${API}/signup`,{
          method:'POST',
          headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      }).then( response=>{
          return response.json()
      }).then(data=>{
        console.log(data.error)
        this.setState({errorMessage:data.error})
        console.log(data.error)
        if(!data.error)
       // this.props.navigation.navigate('signin')
       this.setState({successMessage:'signup success, now signin'})
      })
      .catch(err=>console.log(err))
        
    }

   


    return(

      <KeyboardAvoidingView style={styles.container}>
        <View style = {{padding:10}}>
              <Text style = {{color:'red'}}>
              {this.state.errorMessage}
              </Text>
            </View>
            <View style = {{padding:10}}>
              <Text style = {{color:'green'}}>
              {this.state.successMessage}
              </Text>
            </View>
          <View style = {styles.inputContainer}>
              <TextInput 
                  placeholder = 'Name'
                  Value = {this.state.name}
                  onChangeText = {text=>this.setState({name:text})}
                
                  style = {styles.inputs}
              />
          </View>
  
          <View style = {styles.inputContainer}>
              <TextInput 
                  placeholder = 'Phone'
                  onChangeText = {text=>this.setState({number:text})}
                  Value = {this.state.number}
                  keyboardType= {'numeric'}
                  style = {styles.inputs}
              />
          </View>
  
  
          <View style = {styles.inputContainer}>
              <TextInput 
                  placeholder = 'Email'
                  onChangeText = {text=>this.setState({email:text})}
                  Value = {this.state.email}
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
       onPress={() =>handleSignUp() }>
        <Text style={styles.signUpText}> Sign up </Text>
      </TouchableHighlight>
  
      <TouchableHighlight style={[styles.inButtonContainer, styles.signupButton]}
      onPress={() =>this.props.navigation.navigate('signin') }>
        <Text style={styles.signUpText}>Sign in</Text>
      </TouchableHighlight>
  
      <Text style = {styles.pad}>
          already an user?signin
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
      },
      pad:{
          marginBottom:10
      },
      google:{
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30
      }
})

export default SignUp;
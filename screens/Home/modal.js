import React from 'react';
import { StyleSheet, Text, View, Button,  Modal ,KeyboardAvoidingView, AsyncStorage ,TouchableHighlight,TextInput} from 'react-native';
import Home from './home'
import {API} from '../../config'
import {useState} from 'react'

const addName = (props)=>{
    const [name , setName] = useState('')
    const [number, setNumber] = useState();
    const [errorMessage , setErrorMessage] = useState()
    const [success , setSuccess] = useState('')

    const handleSubmit = async()=>{
        const token = await AsyncStorage.getItem('token')
        const pass = {name , number}
        setSuccess('')
        setErrorMessage()

        fetch(`${API}/fname`,{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            },
            body: JSON.stringify(pass)
        }).then(response=>{
            return response.json()
        }).then(async data=>{
            
            
            if(name ==='')
            {
                setErrorMessage('name is required')
            }
            if(name){
                setSuccess('account has created')
            }
            setName('')
            setNumber()
            props.navigation.navigate('Home')
        }).catch(err=>{
            console.log(err)
        })
        
    }
    return(

       
        
        <KeyboardAvoidingView style={styles.container}>


            <View style = {{padding:10}}>
                        <Text style = {{color:'red'}}>
                        {errorMessage}
                        </Text>
                    </View>

                    <View style = {{padding:10}}>
                        <Text style = {{color:'green'}}>
                        {success}
                        </Text>
                    </View>
  
              <View style = {styles.inputContainer}>
                  <TextInput 
                      placeholder = 'Name'
                      onChangeText = {text=>setName(text)}
                      Value = {name}
                      style = {styles.inputs}
                  />
              </View>
          
              
              <View style = {styles.inputContainer}>
                  <TextInput 
                      placeholder = 'Phone'
                      onChangeText = {text=>setNumber(text)}
                      Value = {number}
                      keyboardType = {'numeric'}
                      style = {styles.inputs}
                      
                  />
              </View>
  
  
          <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
          onPress={() =>handleSubmit()}>
            <Text style={styles.signUpText}>Submit</Text>
          </TouchableHighlight>         
          
        </KeyboardAvoidingView>
        
    )
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

export default addName;
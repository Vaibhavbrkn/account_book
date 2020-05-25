import React from 'react'
import {Button,TextInput , View, Text, KeyboardAvoidingView  , StyleSheet , Image, TouchableHighlight, ScrollView} from 'react-native'
import { Ionicons , MaterialIcons } from '@expo/vector-icons'
import {useState} from 'react'
import * as firebase from 'firebase'


const Up = ()=>{
    const [Phone , setPhone] = useState(null)
    const [code , setCode] = useState(null)
    const [verify , setVerify] = useState(true)
    
    return(
        <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.inputContainer}>
                 <TextInput 
                     placeholder = 'code'
                     onChangeText = {text=>setPhone(text)}
                     Value = {Phone}
                     keyboardType = 'numeric'
                     style = {styles.inputs}
                 />
             </View>
 
             <TouchableHighlight style={[styles.buttonContainer, styles.Button]}>
                 <Text style={styles.Text}>code</Text>
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
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
     Button: {
        backgroundColor: "#FF4DFF",
      },
     Text: {
        color: 'white',
      },
})

export default Up;
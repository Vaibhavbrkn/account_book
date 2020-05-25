import React from 'react'
import {View , Text , Button , TextInput , KeyboardAvoidingView , StyleSheet , AsyncStorage , Picker } from 'react-native'
import {API} from '../../config'
import {useState , useEffect} from 'react'

const Models = (props)=>{
    const[title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [value , setValue] = useState('cash')

    return(
        <KeyboardAvoidingView style={styles.container}>

          <View style = {styles.inputContainer}>
              <TextInput 
                  placeholder = 'Title'
                  onChangeText = {text=>setTitle(text)}
                  Value = {title}
                  style = {styles.inputs}
              />
          </View>

          <View style = {styles.descContainer}>
              <TextInput 
                  placeholder = 'Description'
                  onChangeText = {text=>setDescription(text)}
                  Value = {description}
                  style = {styles.inputs}
              />
          </View>

          <View style = {styles.inputContainer}>
              <TextInput 
                  placeholder = 'value'
                  onChangeText = {text=>setValue(text)}
                  Value = {value}
                  style = {styles.inputs}
                  keyboardType = 'numeric'
              />
          </View>
            
          <Picker
          style = {{width:100}}
          selectedValue = {value}
          onValueChange = {current=>setValue(current)}>
          <Picker.Item label = 'cash' value = 'cash'/>
          <Picker.Item label = 'credit' value = 'credit'/>
          <Picker.Item label = 'debit' value = 'debit'/>
          </Picker>

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
      descContainer:{
        borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          width:250,
          height:100,
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
    })

export default Models;
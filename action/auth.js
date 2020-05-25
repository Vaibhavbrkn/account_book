import React from 'react'
import {API} from '../config'
import {AsyncStorage} from 'react-native'

/*export const signup = (user)=>{
    return fetch(`${API}/signup`,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response=>{
        console.log(response)
        return response.json()
    }).then(async data=>{
        console.log(data)
        try{
            await AsyncStorage.setItem('token' , data.token)
        } catch(e){
            console.log(e)
        }
    })
    .catch(err=>console.log(err))
}*/

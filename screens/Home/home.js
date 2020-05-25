import React from 'react';
import { StyleSheet, Text, View, Button , AsyncStorage ,  ScrollView, TouchableHighlight} from 'react-native';
import {useState , useEffect} from 'react'
import {API} from '../../config'


const Home = (props)=> {
  
  const [data , setData] = useState([])
  const [load , setLoad] = useState(false)
  
  useEffect(()=>{
    token()
  })

 const token= async()=>{
    const token =  await AsyncStorage.getItem('token')
    fetch(`${API}/fnames`,{
      method:'GET', 
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
      }
  }).then(response=>{
      return response.json()
  }).then(async data=>{
      setData(data)
      setLoad(true)
      
  }).catch(err=>{
      console.log(err)
  })

}

const handleDelete = async(slug)=>{
  const token =  await AsyncStorage.getItem('token')
  fetch(`${API}/fname/${slug}`,{
    method:'DELETE',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
    }
}).then(response=>{
    return response.json()
})
}
     
      return (

        
         <ScrollView style = {styles.container}>
            
              {data.map(item=>(
                <View key = {item._id}>
                <TouchableHighlight onPress  = {()=>props.navigation.navigate('List' , {nameSlug:item.slug})}>
                  <View style = {styles.card}>
                    <View style = {{flexDirection:"row" ,justifyContent:'space-between'}}>
                    <Text style = {styles.tCard}>
                    {item.name}
                    </Text>
                    <View style = {{flex:50}}>
                      <Button
                      style = {styles.button}
                      title= {'update'}
                      color = {'green'}
                      />
                    </View>
                     </View>
                    <View style = {{flexDirection:"row" ,justifyContent:'space-between' , padding:10}}>
                    <View style = {{flex:50}}>
                  <Text  style ={{backgroundColor:item.total?'red':'green' , alignSelf:'flex-start' , fontSize:20  , margin:7 }}>
                    {Math.abs(item.total)}
                  </Text>
                  </View>
                  <View style = {{flex:50}}>
                      <Button
                      style = {styles.button2}
                      title= {'remove'}
                      color = {'red'}
                      onPress = {()=>handleDelete(item.slug)}
                      />
                    </View>
                  </View>
                  </View>
                </TouchableHighlight>
              </View>
              ))}
           
          </ScrollView> 
         
  );
    
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  button:{
    width:'60%',
    backgroundColor:'green',
    fontSize:20,
    margin:5
  },
  button2:{
    width:'60%',
    color:'red'
  },
  card:{
    padding:10,
    paddingLeft:20,
    margin :15,
    height:125,
    backgroundColor:'#00b5ec',
    borderRadius:20,
    width:'80%'
  
  },
  tCard:{
    fontSize:20,
    flex:50
  },
 
}
)

export default Home;
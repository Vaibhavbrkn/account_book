import React from 'react';
import { StyleSheet, Text, View  , Button , AsyncStorage} from 'react-native';

const Account = (props)=> {

  const sign = async()=>{

    await AsyncStorage.removeItem('token')
    props.navigation.reset({
      index:0,
      routes:[{name:'Authenticate'}]
    })
  } 

  return (
    <View style={styles.container}>
      <View >
        <Text>account</Text>
      </View>
      <Button style = {styles.button}
      title = 'SignOut'
      onPress = {()=>sign()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button:{
    padding: 20,
    fontSize: 15,
    width: 250,
    marginBottom:10
  }
});

export default Account;
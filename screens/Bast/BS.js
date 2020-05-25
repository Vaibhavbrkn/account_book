import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bs = ()=> {
  return (
    <View style={styles.container}>
      <Text>BS</Text>
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
});

export default bs;
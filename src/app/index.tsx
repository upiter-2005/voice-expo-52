import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link, Redirect, router } from "expo-router"
import React from 'react';
import {StyleSheet} from 'react-native'

const App = () => {

  return (
      <ScrollView style={styles.flex1}>
        <TouchableOpacity onPress={()=> router.push('/steps')}  style={styles.btnStep}>
          <Text style={styles.text}>Step 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/record')} style={styles.btnStep} >
          <Text style={styles.text}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/search/20')} style={styles.btnStep}><Text className='text-center text-white'>Pressssss</Text></TouchableOpacity>
        <Link href="/subscribe">Subscribe</Link>
      </ScrollView>
  );
}

export default App

const styles = StyleSheet.create({
  flex1 : {
    flex: 1
  },
  btnStep: {
    padding: 4,
    backgroundColor: "#efefef",
    borderRadius: 16,
    marginBottom: 5
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }

})



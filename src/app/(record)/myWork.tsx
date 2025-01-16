import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import settings from '@/src/assets/images/settings.webp'
import vip from '@/src/assets/images/vip.webp'
import empty from '@/src/assets/images/Empty.webp'
import { RecordItem } from '@/src/components/RecordItem'
import useRecordsStore from "@/src/store/useRecordsStore"

const MyWork = () => {
  const { items, fetchItems, updateItem } = useRecordsStore();

 useEffect(() => {
  const fetchData = async () => {
    await fetchItems();
  };
  fetchData()
}, []);
      
  return (
    <View style={styles.container}>
      <View style={styles.topBtns}>
        <TouchableOpacity onPress={()=>{}}>
          <Image
            source={settings}
            resizeMode='contain'
            style={{width:47, height:47}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Image
            source={vip}
            resizeMode='contain'
            style={{width:47, height:47}}
          />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.workTitle}>My Work</Text>

      <ScrollView style={styles.worksList}>
        {items.length ? (
          items?.map((obj: any, i: number) => <RecordItem key={i} id={obj} display_name={obj} avatar_image={''} number={i+1}/>)
        )
      :
      (
        <View style={{flex: 1, flexDirection: 'column',  alignItems: 'center',  width: "100%", }}>

              <Image source={empty} resizeMode='contain' style={{width: 130, height: 130}}  />
              <Text style={{color: '#fff', marginTop: 20}}>It’s empty</Text>

          </View>
      )}
      </ScrollView>

    </View>
  )
}

export default MyWork

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //height: "100%",
     justifyContent: 'center',
     backgroundColor: "#000",
  },
  topBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    height: 70
  },
  workTitle: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 24,
    marginTop: 12
  },
  worksList:{
    padding: 20,
    flexDirection: 'column'
    
  }
})
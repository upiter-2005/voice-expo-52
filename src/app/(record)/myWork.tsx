import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import settings from '@/src/assets/images/settings.webp'
import vip from '@/src/assets/images/vip.webp'
import { RecordItem } from '@/src/components/RecordItem'
import useRecordsStore from "@/src/store/useRecordsStore"

const MyWork = () => {
  const { items, fetchItems, updateItem } = useRecordsStore();

 useEffect(() => {
  const fetchData = async () => {
    await fetchItems();
  };
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
          {/* <RecordItem /> */}
          {/* {voices?.map((obj: any, i) => <RecordItem key={obj.id} id={obj.id} display_name={obj.display_name} avatar_image={obj.avatar_image} />)} */}

             {items?.map((obj: any, i: number) => <RecordItem key={i} id={obj} display_name={obj} avatar_image={''} number={i+1}/>)}
      </ScrollView>



          {/* <View className='flex-1 flex-col justify-center items-center '>

              <Image source={empty}resizeMode='contain' className='w-[130px] h-[130px]'  />
              <Text className='text-white'>It’s empty</Text>

          </View> */}


    </View>
  )
}

export default MyWork

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000",
    flexDirection: 'column',
    paddingBottom: 80
  },
  topBtns: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8
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
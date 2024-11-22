import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import settings from '@/src/assets/images/settings.webp'
import vip from '@/src/assets/images/vip.webp'

import { useIsFocused } from '@react-navigation/native'
import { RecordItem } from '@/src/components/RecordItem'
import { useGetVoices } from '@/src/hooks/useFetchVoices'



const MyWork = () => {
   //const isFocused = useIsFocused();
  // useEffect(()=>{
  //   if(isFocused)console.log('works page')
  // }, [isFocused])


  const {voices} = useGetVoices()

  
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
          {voices?.map((obj: any, i) => <RecordItem key={obj.id} id={obj.id} display_name={obj.display_name} avatar_image={obj.avatar_image} />)}
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
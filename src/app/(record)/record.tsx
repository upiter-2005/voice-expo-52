import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import settings from '@/src/assets/images/settings.webp'
import vip from '@/src/assets/images/vip.webp'
import importIco from '@/src/assets/images/Import.webp'
import record from '@/src/assets/images/tap.webp'
import bgimg from '@/src/assets/images/bg-gradient.webp'

import { useEvent } from 'expo'
import { useVideoPlayer, VideoView } from 'expo-video'
import {useGetVoices} from "@/src/hooks/useFetchVoices"
const videoSource = require('@/src/assets/images/Preloader.mp4')
import * as DocumentPicker from 'expo-document-picker'
import {createVoice} from "@/src/utils/createVoice"


const Record = () => {

  const [fileName, setFileName] = useState<string>('')
  
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true
    player.play()
  });


  const importRecord = async() => {
    const resp = await DocumentPicker.getDocumentAsync()
    if(resp.assets){
    
      const result = await createVoice(resp.assets[0].name, resp.assets[0].uri)
      console.log(resp.assets[0]) 
      console.log(resp.assets[0].name)
      console.log(result)
    }
  }
//  const obj = {
//   "assets": [
//     {
//       "mimeType": "audio/mpeg", 
//       "name": "donald-duck-wishes-a-merry-christmas-83287.mp3",
//       "size": 156000, 
//       "uri": "file:///var/mobile/Containers/Data/Application/3F6C2919-E4FA-4208-A719-10ADA67C19EB/Library/Caches/ExponentExperienceData/@anonymous/voice-eb3ae61d-0ff2-4e2b-a026-228edaa56966/DocumentPicker/E5D5614E-A6CA-4345-A18D-3856737743FA.mp3"
//     }
//     ],
//       "canceled": false
//     }
  
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  return (
    
      <View style={{flex: 1}}>
        <ImageBackground source={bgimg} resizeMode="cover" style={styles.gbImg}>

          <View style={styles.topBtns}>
              <TouchableOpacity onPress={()=>{}}>
                <Image
                  source={settings}
                  resizeMode='contain'
                  style={{width:12, height:12}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}}>
                <Image
                  source={vip}
                  resizeMode='contain'
                  style={{width:12, height:12}}
                />
              </TouchableOpacity>
            </View>

          <View className='items-center flex-col'>
                    
            <View style={styles.contentContainer}>
              <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
              <View style={styles.controlsContainer}>
                <Button
                  title={isPlaying ? 'Pause' : 'Play'}
                  onPress={() => {
                    if (isPlaying) {
                      player.pause();
                    } else {
                      player.play();
                    }
                  }}
                />
              </View>
            </View>


            <Text style={styles.time}>00:00</Text>
            </View>

            <View style={styles.btnsBox}>

              <TouchableOpacity onPress={importRecord} style={styles.btn} >
                <Image
                  source={importIco}
                  resizeMode='contain'
                  style={styles.iconSize}
                />
                <Text style={styles.recordBtn}>Import</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{}} style={styles.btn} >
                <Image
                  source={record}
                  resizeMode='contain'
                  style={styles.iconSize}
                />
                <Text style={styles.recordBtn}>Tap to Record</Text>
              </TouchableOpacity>

            </View>
        </ImageBackground>
         
      </View>
      
    
    
  )
}

export default Record

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
  recordBtn: {
    color: '#fff'
  },
  iconSize:{
    width: 74,
    height: 74
  },
  btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center"
  },
  gbImg:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  topBtns:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8
  },
  time:{
    fontSize: 48,
    color: "#fff",
    marginBottom: 60,
    textAlign: 'center'    
  },
  btnsBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 340,
    paddingHorizontal: 12,
    marginHorizontal: 'auto',
    gap: 64,
    marginBottom: 120
    //flex-row justify-between max-w-[340px] px-3 mx-auto gap-16 mb-[120px]
  }
});



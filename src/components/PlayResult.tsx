import { View, Text, TouchableOpacity,Image, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import recordItem from '@/src/assets/images/User.webp'
import pause from '@/src/assets/images/Pause.webp'
import play from '@/src/assets/images/Play.webp'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useEvent } from 'expo'
import { LinearGradient } from 'expo-linear-gradient'
import { Audio } from 'expo-av'
import * as Sharing from 'expo-sharing'

const videoSource = require('@/src/assets/images/videos/Sphere.mp4')

interface IPlayResult {
    resultRecord: any
}
export const PlayResult:React.FC<IPlayResult> = ({resultRecord}) => {
    const [isPlaing, setIsPlaing] = useState<boolean>(false);
    const [sound, setSound] = useState<any>();
    
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    const playRecordHandler = async() => {
        const status = await sound.getStatusAsync()
        console.log(status)
        if(isPlaing){
            
            await sound.pauseAsync()
            setIsPlaing(false)
        }else{
            
            await sound.playAsync()
            setIsPlaing(true)
        }
        
    }

    const shareRecord = () => {
        Sharing.shareAsync(resultRecord)
    }


useEffect(()=>{
    async function setRecordSound () {
        const { sound } = await Audio.Sound.createAsync( { uri: resultRecord as string } )
        setSound(sound)
        sound.setStatusAsync({ isLooping: true })
    }
    setRecordSound()
}, [resultRecord])

  return (
    <View style={{}}>
    <VideoView style={{width:430, height: 430, position: 'relative', right: -60}} player={player} allowsFullscreen allowsPictureInPicture />
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20}}>
      {/* <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={() => {
          if (isPlaying) {
            player.pause();
          } else {
            player.play();
          }
        }}
      /> */}
        
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={playRecordHandler}
        >
        <Image
            source={isPlaing ? pause : play}
            resizeMode='contain'
            style={{width:93, height:93}}
        />
        </TouchableOpacity>
       
      <TouchableOpacity
          activeOpacity={0.6}
          onPress={shareRecord}
        >
          <LinearGradient
            colors={['#00A3FF', '#CC00FF']}
            start={{ x: 1, y: .5 }}
            end={{ x: 0, y: .5 }}
            style={styles.createBtn}
          >
            <Text style={{color: '#fff', fontSize: 24}}>Share</Text>
          </LinearGradient>
        </TouchableOpacity> 
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    createBtn: {
        width: 320,
        height: 47,
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
      },
 

})
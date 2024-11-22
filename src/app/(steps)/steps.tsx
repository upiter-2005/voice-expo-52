import { router } from 'expo-router'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import step1 from '@/src/assets/images/step1.png'
import step2 from '@/src/assets/images/step2.png'
import step3 from '@/src/assets/images/step3.png'
import step4 from '@/src/assets/images/step4.png'

import Carousel from 'react-native-reanimated-carousel'
import type { ICarouselInstance } from "react-native-reanimated-carousel"

export default function Step1() {
  const data = [
    {title: "Welcome to VoiceMe!", img: step1},
    {title: "Record friend's or celeb's voices", img: step2},
    {title: "Write text for that voice", img: step3},
    {title: "Done! Send funny phrases in their voices. Enjoy!", img: step4},
  ]
  const ref = React.useRef<ICarouselInstance>(null)
  const renderItem = ({item}: {item: any}) => {

    return (
     
      <ImageBackground 
        source={item.img}
        style={styles.stepContainer}
        resizeMode='cover'
      >
        <View style={styles.slideImgWrapper}>
          <Text style={styles.imageChapture}>How to use</Text>
          <Text style={styles.imageTitile} >{item.title}</Text> 
        </View>
        <View style={styles.btnsBlock}>
          
          <TouchableOpacity
            style={styles.skipBtn}
            activeOpacity={0.7}
            onPress={()=>router.push('/')}
          >
            <Text style={styles.nextText}>Skip</Text>
          </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextBtn}
              activeOpacity={0.6}
              onPress={()=>ref.current?.next()}
            >
              <LinearGradient
                colors={['#00A3FF', '#CC00FF']}
                start={{ x: 1, y: .5 }}
                end={{ x: 0, y: .5 }}
              >
                <Text style={styles.nextText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity> 
        </View>
      </ImageBackground>
    );
  };

  return (
    
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={ref}
          loop={false} // Enables infinite looping of the carousel
          width={Dimensions.get('window').width} // Width of each item in the carousel
          height={Dimensions.get('window').height} // Height of the carousel
          data={data} // Data to be rendered in the carousel
          autoPlay={false} // Automatically starts playing the carousel
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pagingEnabled
          scrollAnimationDuration={1000} // Duration of the scrolling animation
          onSnapToItem={(index: number) => console.log('current index:', index)} // Callback function triggered when an item is snapped to
          renderItem={renderItem} // Function to render each item in the carousel
          
        />
      </View>
   
    
  );
}




const styles = StyleSheet.create({
  carouselWrapper: {
    flex: 1
  },
  nextBtn: {
    width: '100%',
    height: '100%',
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden'
  },
  nextText:{
    fontSize: 20,
    color: "#fff",
    textAlign: 'center',
    padding: 16
  },
  stepContainer: {
    backgroundColor: "#000",
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  slideImgWrapper:{
    position: 'absolute',
    top: 60,
    zIndex: 20,
    maxWidth: 315,
    textAlign: 'center'
    //absolute top-[60px] z-20 max-w-[315px] text-center
  },
  imageChapture:{
    fontSize: 20,
    color: '#decaff',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-HeavyItalic'
    //text-xl text-[#DECAFF] text-center font-[SF-Pro-Text-HeavyItalic]
  },
  imageTitile:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'SF-Pro-Text-HeavyItalic',
    fontSize: 32,

    //text-white text-center text-[32px] font-[SF-Pro-Text-HeavyItalic]
  },
  btnsBlock:{
    position: 'absolute',
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20, 
    gap: 12,
    paddingHorizontal: 8
    //absolute bottom-20 left-0 w-full flex flex-row justify-center items-center z-20 gap-3 px-2
  },
  skipBtn:{
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 12,
    width: 100,
    borderWidth: 2,
    borderColor: '#fff'

    //bg-transparent p-4 rounded-2xl w-[100px] border-white border-2 
  }
})
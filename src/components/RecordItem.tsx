import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'
import recordItem from '@/src/assets/images/User.webp'
import cancel from '@/src/assets/images/Cencel.webp'
import share from '@/src/assets/images/Share.webp'

interface IRecordItem {
    id: string,
    display_name: string,
    avatar_image: string | null
}
export const RecordItem:React.FC<IRecordItem> = ({id, display_name, avatar_image}) => {
  return (
    <View style={styles.recordItem}>
        {
            avatar_image ? 
            <Image source={{uri: avatar_image}} resizeMode='contain' style={styles.recordItemAvatar} />
            :
            <Image source={recordItem} resizeMode='contain' style={styles.recordItemAvatar} />
        }
        
        <View  style={{flex: 1}}>
            <Text style={styles.recordItemTitle}>Record #1</Text>
            <Text style={{color: "#fff", fontSize: 16}}>{display_name}</Text>
        </View>
        <View style={styles.recordItemBtns}>
            <TouchableOpacity onPress={()=>{}}>
            <Image
                source={share}
                resizeMode='contain'
                style={{width:37, height:37}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
            <Image
                source={cancel}
                resizeMode='contain'
                style={{width:37, height:37}}
            />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    recordItem:{
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#070B16',
        borderWidth: 1,
        borderColor: '#0E152B',
        borderRadius: 10,
        position: 'relative',
        paddingLeft: 50,
        paddingVertical: 5,
        height: 47,
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 22
        //flex-row w-[95%] bg-[#070B16] border border-[#0E152B] rounded-[10px] relative pl-[50px] py-2 h-[47px] self-end justify-between mb-[22px]
    },
    recordItemTitle:{
        color: '#7D7D7D',
        fontSize: 14,
        marginBottom: 2
    },
    recordItemAvatar:{
        width: 51,
        height: 51,
        position: 'absolute',
        top: -4,
        left: -16
    },
    recordItemBtns:{
        position: 'relative',
        top: 0,
        paddingRight: 4,
        flexDirection: 'row',
        gap: 5
    }
    //relative -top-[4px] pr-1 flex-row gap-[5px]
    //w-[51px] h-[51px] absolute -top-1 -left-4
    //text-[#7D7D7D] text-xs mb-[2px]

})
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { windowWidth, windowHeight } = Dimensions.get('window')

const SwiperType1 = ({ item, index }) => {
    return (
        <View style={{ width: 340, height: '100%', marginRight: 25, marginLeft: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <View style={{ width: '100%', height: '25%', backgroundColor: 'red' }}>
                <Image source={item.images} />
            </View>
        </View>
    )
}

export default SwiperType1
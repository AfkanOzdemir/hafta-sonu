import { View, Text } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { windowWidth, windowHeight } = Dimensions.get('window')

const SwiperType1 = ({ item, index }) => {
    return (
        <View style={{ width: 250, height: '80%', marginRight: 25, marginLeft: 25, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' , padding:20}}>
            <Text>SwiperType</Text>
        </View>
    )
}

export default SwiperType1
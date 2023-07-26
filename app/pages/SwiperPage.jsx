import { View, Text, AppRegistry, StyleSheet, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Image } from 'expo-image';
import data from '../../api/data.json'
import Swiper from 'react-native-swiper'
const SwiperPage = () => {


    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Swiper showsButtons={false} showsPagination={false}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default SwiperPage
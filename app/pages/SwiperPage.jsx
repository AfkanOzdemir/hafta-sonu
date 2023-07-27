import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { React, useState } from 'react'
import data from '../../api/data.js'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Dimensions } from 'react-native'
import SwiperType1 from '../../components/SwiperItemTypes/SwiperType1.jsx'

const { windowWidth, windowHeight } = Dimensions.get('window')
const SwiperPage = ({ navigation }) => {
    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'column', backgroundColor: '#FFF8EA' }}>
            <Navbar navigation={navigation} />
            <View style={{ width: '100%', height: '75%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <View style={{ width: '100%', height: '90%', justifyContent: 'center', alighItems: 'center' }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => item.id}
                        horizontal={true}
                        style={{ width: '100%', height: '100%' }}
                        renderItem={({ item, index }) => {
                            switch (item.itemType) {
                                case 0: return (<SwiperType1 item={item} index={index} />)
                            }
                        }}
                    />
                </View>
            </View>
            <Footer />
        </View>
    )
}

export default SwiperPage
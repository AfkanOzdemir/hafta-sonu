import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
const SecondSwiperType = ({ item, index }) => {
    const size = useWindowDimensions();
    return (
        <View style={{ width: size.width - 50, height: '95%', marginRight: 25, marginLeft: 25 }}>
            <View style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'white', alignItems: 'center', justifyContent: item.headerImage ? 'space-between' : 'center' }}>
                {
                    item.videoButton ?
                        <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
                            <TouchableOpacity style={{ width: 60, height: 60, position: 'relative', backgroundColor: 'transparent', borderRadius: 500, justifyContent: 'center', paddingLeft: 6, alignItems: 'center' }}>
                                <View style={{ position: 'absolute', width: 60, height: 60, borderColor: 'white', borderWidth: 2, opacity: .7, backgroundColor: 'black', borderRadius: 500 }} />
                                <Image source={require('../../assets/images/icons/play-button.png')} style={{ width: 25, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                        : null
                }
                <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
                    <Image
                        source={require('../../assets/images/16x9/1.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                    <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={{ position: 'absolute', width: '100%', height: '100%', top: 0 }} />
                </View>
                <View style={{ zIndex: 5, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'flex-end', paddingVertical: 20 }}>
                    <Text style={{ fontSize: 14, color: 'white', fontWeight: 'normal' }}>{item.lineOptions.title}</Text>
                    <View style={{ width: '30%', height: 1, backgroundColor: 'white', marginVertical: 15 }} />
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: '600', textAlign: 'center', marginBottom: 15 }}>{item.lineOptions.desc}</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'normal', paddingHorizontal: 30, paddingVertical: 5, borderWidth: 1, borderRadius: 25, borderColor: 'white' }}>{item.buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 74, textAlign: 'center', width: '100%', position: 'absolute', bottom: '-8%', zIndex: -10 }}> {index + 1 < 10 ? "0" + (index + 1) : index + 1} </Text>
            </View>
        </View>
    )
}

export default SecondSwiperType  
import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const ThirdSwiperType = ({ item, index }) => {
    const size = useWindowDimensions();
    return (
        <View style={{ width: size.width - 50, height: '95%', marginRight: 25, marginLeft: 25 }}>
            <View style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: 'white', alignItems: 'center', justifyContent: item.headerImage ? 'space-between' : 'center' }}>
                {item.adImages.firstAdImage != '' ?
                    <View style={{ width: '100%', height: '100%', padding: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image
                            source={require('../../assets/images/1x1/1.png')}
                            style={{ width: '100%', height: '45%' }}
                            resizeMode="cover"
                        />
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>REKLAM</Text>
                        <Image
                            source={require('../../assets/images/1x1/1.png')}
                            style={{ width: '100%', height: '45%' }}
                            resizeMode="cover"
                        />
                    </View> :
                    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal:20 }}>
                        <Image
                            source={require('../../assets/images/1x1/1.png')}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="cover"
                        />
                    </View>
                }
            </View>
            <Text style={{ fontSize: 74, textAlign: 'center', width: '100%', position: 'absolute', bottom: '-8%', zIndex: -10 }}> {index + 1 < 10 ? "0" + (index + 1) : index + 1} </Text>
        </View >
    )
}

export default ThirdSwiperType  
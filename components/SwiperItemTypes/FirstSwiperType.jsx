import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const FirstSwiperType = ({ item, index }) => {
    const size = useWindowDimensions();
    return (
        <View style={{width: size.width - 50, height: '95%', marginRight: 25, marginLeft: 25}}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: item.headerImage ? 'space-between' : 'center', padding: 20 }}>
                {item.headerImage ?
                    <View style={{ width: '100%', height: size.height / 5 }}>
                        <Image
                            source={require('../../assets/images/1x1/3.png')}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="cover"
                        />
                    </View>
                    : null}
                <View style={{ width: '100%', height: '65%', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#000' }}>{item.lineOptions.title}</Text>
                    <View style={{ width: '30%', height: 1, backgroundColor: 'black', marginVertical: 5 }} />
                    <Text style={{ fontSize: 22, fontWeight: '600', textAlign: 'center' }}>{item.lineOptions.desc}</Text>
                    <View style={{ width: '60%', height: 1, backgroundColor: 'black', marginVertical: 5 }} />
                    <Text style={{ fontSize: 16, fontWeight: 'normal', lineHeight: 25, marginBottom: 20, textAlign: 'center' }}>{item.desc}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'normal', textAlign: 'center', marginBottom: 15 }} >{item.dateTime} - {item.time}</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', paddingHorizontal: 30, paddingVertical: 5, borderWidth: 1, borderRadius: 25, borderColor: 'black' }}>{item.buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontSize: 74,textAlign:'center',width:'100%', position: 'absolute', bottom:'-8%' , zIndex:-10}}> {index + 1 < 10 ? "0"+(index+1) : index + 1} </Text>
        </View>



    )
}

export default FirstSwiperType  
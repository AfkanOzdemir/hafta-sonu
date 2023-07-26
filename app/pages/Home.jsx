import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Home = () => {
    return (
        <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
            <Image source={require('../../assets/images/bg-image.svg')} style={{ width: '100%', height: '100%', position: 'absolute', resizeMode:'cover' }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/images/main-text-small.png')} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />
            </View>
            <View style={{ width: '80%', height: '10%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <TouchableOpacity style={{ paddingHorizontal: 40, paddingVertical: 12, marginRight: 5, borderRadius: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#E9D29E' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>görüntüle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 16, marginLeft: 5, borderRadius: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#E9D29E' }}>
                    <Image source={require('../../assets/images/icons/right-arrow.svg')} style={{ width: 30, height: 16 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home
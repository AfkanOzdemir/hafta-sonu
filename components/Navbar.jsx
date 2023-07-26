import React from 'react'
import { Image } from 'expo-image';
import { View, TouchableOpacity } from 'react-native'
const Navbar = () => {
    return (
        <View style={{ width: '100%', height: '15%', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <TouchableOpacity style={{ width: '50%', height: '90%', backgroundColor: 'white', borderBottomRightRadius: 100, borderBottomLeftRadius: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: -30, paddingLeft: 10 }}>
                <Image source={require('../assets/images/logo/ht-haftasonu-black.svg')} style={{ width: 100, height: 55 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 0 }}>
                <Image source={require('../assets/images/icons/menu.svg')} style={{ width: 32, height: 22, objectFit: 'cover' }} />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar
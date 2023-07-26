import React from 'react'
import { View, Text } from 'react-native'

const Footer = () => {
    return (
        <View style={{ width: '100%', height: '10%',paddingHorizontal:20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{textAlign:'center', fontSize:12}}>
                Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
            </Text>
        </View>
    )
}

export default Footer
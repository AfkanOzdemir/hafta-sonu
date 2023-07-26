import { View, Text } from 'react-native'
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from './pages/Home'
import SwiperPage from './pages/SwiperPage'
const index = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#FFF8EA" }}>
            <Navbar />
            <View style={{width: '100%', height: '75%'}}>
                <SwiperPage />
            </View>
            <Footer />
        </View>
    )
}

export default index
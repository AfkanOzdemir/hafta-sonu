import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import { React, useState, useEffect } from 'react'
import data from '../../api/data.json'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import { Dimensions } from 'react-native'
import FirstSwiperType from '../../components/SwiperItemTypes/FirstSwiperType.jsx'
import SecondSwiperType from '../../components/SwiperItemTypes/SecondSwiperType'
import ThirdSwiperType from '../../components/SwiperItemTypes/ThirdSwiperType'

const { windowWidth, windowHeight } = Dimensions.get('window')
const SwiperPage = ({ navigation }) => {
    const [SwiperData, setSwiperData] = useState(data)
    useEffect(() => {
        setSwiperData(data.body.items);
    }, []);

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', flexDirection: 'column', backgroundColor: '#FFF8EA' }}>
            <Navbar navigation={navigation} />
            <View style={{ width: '100%', height: '75%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <Image source={require('../../assets/images/bg-image.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode='cover' />
                <View style={{ width: '100%', height: '95%', justifyContent: 'center', alighItems: 'center' }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={SwiperData}
                        keyExtractor={(item, index) => item.id}
                        horizontal={true}
                        style={{ width: '100%', height: '100%' }}
                        renderItem={({ item, index }) => {
                            switch (item.lineOptions.title) {
                                case 'FUAR':
                                    return <FirstSwiperType item={item} index={index} />
                                case 'SERGİ':
                                    return <SecondSwiperType item={item} index={index} />
                                case 'REKLAM':
                                return <ThirdSwiperType item={item} index={index} />
                                default:
                                    break;
                            }
                        }}
                    />
                </View>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default SwiperPage
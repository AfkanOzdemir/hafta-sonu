import { View, Text, Touchable, Image , SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', flexDirection: 'column' , backgroundColor:'#FFF8EA'}}>
            <Navbar navigation={navigation} />
            <View style={{ width: '100%', height: '75%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <Image source={require('../../assets/images/bg-image.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode='cover' />
                <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/main-text-small.png')} style={{ width: '80%', height: '80%' }} resizeMode='contain' />
                </View>
                <View style={{ width: '80%', height: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SwiperPage')}
                        style={{ paddingHorizontal: 40, paddingVertical: 12, marginRight: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#E9D29E' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>görüntüle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SwiperPage')}
                        style={{ paddingHorizontal: 10, paddingVertical: 16, marginLeft: 5, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#E9D29E' }}>
                        <Image source={require('../../assets/images/icons/right-arrow.png')} style={{ width: 30, height: 16 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>

    )
}

export default Home
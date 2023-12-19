import { View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        Geolocation.getCurrentPosition((info) => {
            console.log("lat: ",info.coords.latitude , "lon: ",info.coords.longitude);
        }  
    );
    },[]);
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
        <View className="space-y-2">
            <Text style={{fontSize:wp(10)}} className="text-center font-bold text-gray-700">Glacier Guru</Text>
            <Text style={{fontSize:wp(4)}} className="text-center tracking-wider font-semi-bold text-gray-600">The future is here, powered by AI</Text>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../../assets/images/welcome.png')} style={{width:wp(75), height:wp(75)}}className="w-72 h-72"></Image>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
            <Text className="text-center font-bold text-white text-2xl">Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
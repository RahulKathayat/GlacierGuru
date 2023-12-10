import { View, Text ,Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height:hp(60)}} className="space-y-4 mb-20">
      <Text style={{fontSize:wp(6.5)}} className="font-semibold text=gray-700">Features</Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/chatgptIcon.png')}  style={{height:hp(4) , width:hp(4)}}></Image>
            <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 tracking-wider">ChatGPT</Text>
        </View>
        <Text style={{fontSize:wp(3.8)}} className="font-medium text-gray-700">ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>      
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/dalleIcon.png')}  style={{height:hp(4) , width:hp(4)}}></Image>
            <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 tracking-wider">Dall-E</Text>
        </View>
        <Text style={{fontSize:wp(3.8)}} className="font-medium text-gray-700"> DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>      
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require('../../assets/images/smartaiIcon.png')}  style={{height:hp(4) , width:hp(4)}}></Image>
            <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700 tracking-wider">Smart AI</Text>
        </View>
        <Text style={{fontSize:wp(3.8)}} className="font-medium text-gray-700">A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>      
      </View>
    </View>
  )
}
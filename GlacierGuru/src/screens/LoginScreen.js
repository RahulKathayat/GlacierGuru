import { View, Text, Image, TextInput, TouchableOpacity,StatusBar,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
          setLoading(true);
          try {
            const res=await axios.get("https://tsukimibackend.onrender.com");
            console.log(res.data.message);
            // const token = await AsyncStorage.getItem("authToken");
            const token = await AsyncStorage.getItem("authToken");
            if (token) {
              navigation.replace("Welcome");
              // navigation.clear();
            } else {
              // token not found , show the login screen itself
            }
          } catch (error) {
            console.log("error", error);
          }
          setLoading(false);
        };
    
        checkLoginStatus();
      }, []);

      const handleLogin = () => {
        setLoading(true);
        const user = {
          email: email,
          password: password,
        };
    
        axios
          .post("https://tsukimibackend.onrender.com/login", user)
          .then((response) => {
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            setLoading(false);
            navigation.replace("Welcome");
          })
          .catch((error) => {
            Alert.alert("Login Error", "Invalid email or password");
            console.log("Login Error", error);
          });
          setLoading(false);
      };

  return (
    <View className="bg-white h-full w-full">
        {/* <StatusBar style="light" /> */}
        <Image className="h-full w-full absolute" source={require('../../assets/images/background.png')} />

        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                source={require('../../assets/images/light.png')} 
                className="h-[225] w-[90]" 
            />
            <Animated.Image 
                entering={FadeInUp.delay(400).duration(1000).springify()} 
                source={require('../../assets/images/light.png')} 
                className="h-[160] w-[65] opacity-75" 
            />
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-40 pb-10">
            
            {/* title */}
            <View className="flex items-center">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className="text-white font-bold tracking-wider text-5xl">
                        Login
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex items-center mx-5 space-y-4">
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify()} 
                    className="bg-black/5 p-2 rounded-2xl w-full ">

                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor={'gray'}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(200).duration(1000).springify()} 
                    className="bg-black/5 p-2 rounded-2xl w-full mb-3">

                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={'gray'}  
                    />
                </Animated.View>

                <Animated.View 
                    className="w-full" 
                    entering={FadeInDown.delay(400).duration(1000).springify()}>

                    <TouchableOpacity onPress={handleLogin} className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">Login</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">

                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={()=> navigation.push('Signup')}>
                        <Text className="text-sky-600">SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}
import { View, Text } from 'react-native'
import React ,{useEffect,useState}from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MapScreen() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const user= AsyncStorage.getItem("authToken");;
  const handleSubmit = async (data) => {
    // e.preventDefault();

    try {
      // Send user submission to server
      console.log("hello : ",data,user);
      await axios.post('https://tsukimibackend.onrender.com/submit', { user, data });
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  useEffect(()=>{
    console.log(user);
      Geolocation.getCurrentPosition((info) => {
        setLatitude( info.coords.latitude);
        setLongitude(info.coords.longitude);
        console.log("lat: ",info.coords.latitude , "lon: ",info.coords.longitude);
        let temp=`${info.coords.latitude.toString()} ${info.coords.longitude.toString()}`
        handleSubmit(temp);
    });
},[]);

  return (
    <View>
      {
        latitude ?(
        <MapView
            style={{width:'100%',height:'100%'}}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
            coordinate={{latitude:latitude,longitude:longitude}}
            />
        </MapView>
        ):(<Text>no maps available</Text>)
      } 

        
    </View>
  )
}
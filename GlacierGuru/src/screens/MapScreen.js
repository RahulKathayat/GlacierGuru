import { View, Text } from 'react-native'
import React ,{useEffect,useState}from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function MapScreen() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(()=>{
      Geolocation.getCurrentPosition((info) => {
        setLatitude( info.coords.latitude);
        setLongitude(info.coords.longitude);
        console.log("lat: ",info.coords.latitude , "lon: ",info.coords.longitude);
    }  
);
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
import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function MapScreen() {
  return (
    <View>
      
        <MapView
            style={{width:'100%',height:'100%'}}
            initialRegion={{
                latitude: 30.6848588,
                longitude: 76.6654077,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
            coordinate={{latitude:30.6848588,longitude:76.6654077}}
            />
        </MapView>
            
        
    </View>
  )
}
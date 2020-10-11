import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default class Mapa extends React.Component{


  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.estilomapa} 
      initialRegion={{
        latitude: 20.6736,
        longitude:  -103.344 ,
        latitudeDelta: .2,
        longitudeDelta: .2
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 20.6788855,
          longitude: -103.2681265
        }}
        title = 'Beach-e Cocktails'
        description ='Sucursal 2'
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude: 20.6795568,
          longitude: -103.3849
        }}
        title = 'Beach-e Cocktails'
        description ='Sucursal 1'
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude: 20.6278058,
          longitude: -103.2939
        }}
        title = 'Beach-e Cocktails'
        description ='Sucursal 3'
      >
      </MapView.Marker>
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estilomapa:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

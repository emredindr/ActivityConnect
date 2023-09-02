import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import {Button} from 'react-native-paper';

const VenueDetailScreen = ({route, navigation}) => {
  const [venue] = useState(route.params.venue);
  const width = Dimensions.get('window').width;

  const coords = {
    latitude: venue.address.latitude,
    longitude: venue.address.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    navigation.setOptions({
      title: venue.name,
      headerTitleAlign: 'flex-start',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={venue.images}
        scrollAnimationDuration={3000}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              margin: 10,
              padding: 10,
            }}>
            <Image
              source={{uri: venue.images[index].url}}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
              }}
            />
          </View>
        )}
      />

      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={coords}
          style={{
            width: '100%',

            height: 300,
          }}>
          <Marker coordinate={coords} />
        </MapView>
      </View>
      <View
        style={{
          flex: 1,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{venue.name}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {venue.address.openAddress}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {venue.address.districtName} / {venue.address.cityName}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Koltuk Kapasitesi : {venue.seatCapacity}
        </Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {venue.phoneNumber}
        </Text>
      </View>
    </View>
  );
};

export default VenueDetailScreen;

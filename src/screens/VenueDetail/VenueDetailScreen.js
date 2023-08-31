import {View, Text, Image} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const VenueDetailScreen = ({route}) => {
  const {venue} = route.params;

  const coords = {
    latitude: venue.address.latitude,
    longitude: venue.address.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  console.log(venue.address, 'the venue');
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: venue.images[0].url}}
        style={{width: 200, height: 200}}
      />
      <Text>{venue.name}</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={coords}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <Marker coordinate={coords} />
      </MapView>
    </View>
  );
};

export default VenueDetailScreen;

import {View, StyleSheet, Text, Image, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import styles from './VenueDetailScreen.Style';

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
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={venue.images}
        scrollAnimationDuration={3000}
        renderItem={({index}) => (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: venue.images[index].url}}
              style={styles.image}
            />
          </View>
        )}
      />

      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={coords}
          style={styles.map}>
          <Marker coordinate={coords} />
        </MapView>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.venueName}>{venue.name}</Text>
        <Text style={styles.venueDetailTexts}>{venue.address.openAddress}</Text>
        <Text style={styles.venueDetailTexts}>
          {' '}
          {venue.address.districtName} / {venue.address.cityName}{' '}
        </Text>
        <Text style={styles.venueDetailTexts}>Koltuk Kapasitesi : {venue.seatCapacity}</Text>
        <Text style={styles.venueDetailTexts}>{venue.phoneNumber}</Text>
      </View>
    </ScrollView>
  );
};

export default VenueDetailScreen;

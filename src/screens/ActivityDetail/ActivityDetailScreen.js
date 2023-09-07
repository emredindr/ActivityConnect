import {StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Share, Alert, Image} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailProperties from '../../components/DetailProperies/DetailProperties';
import Title from '../../components/Title/Title';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import styles from './ActivityDetailScreen.Style';

const ActivityDetailScreen = ({route, navigation}) => {
  const [activity] = useState(route.params.activity);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const coords = {
    latitude: activity.venue.address.latitude,
    longitude: activity.venue.address.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const handleOnPressShare = async () => {
    try {
      const result = await Share.share({
        message: 'Bu güzel etkinliği kaçırmayın! ' + activity.name,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: activity.name,
      headerRight: () => (
        <TouchableOpacity onPress={handleOnPressShare}>
          <Icon
            name="share-variant"
            size={25}
            color="#00B9E8"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'flex-start',
      headerTitleStyle: {fontSize: 15, fontWeight: 'bold', textAlign: 'center'},
    });
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <Carousel
        loop
        width={width}
        height={height / 2.82}
        autoPlay={true}
        data={
          activity.images.length > 0
            ? activity.images
            : [
                {
                  url: 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg',
                },
              ]
        }
        scrollAnimationDuration={5000}
        mode="parallax"
        renderItem={({item, index}) => (
          <Card style={styles.card}>
            <Card.Title
              left={() => (
                <Icon
                  name="image-multiple"
                  size={40}
                  color="#00B9E8"
                />
              )}
              right={
                activity.isFavorite
                  ? () => (
                      <Icon
                        name="star"
                        size={40}
                        color="#FFBF00"
                      />
                    )
                  : ''
              }
              title="GALERİ"
              titleStyle={styles.title}
            />
            <Image
              style={styles.image}
              source={{
                uri: item.url ? item.url : 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg',
              }}
            />
          </Card>
        )}
      />

      <Text style={styles.subjectText}> {activity.activityType.name} </Text>

      <Title title="KONUSU" />

      <DetailProperties fieldValue={activity.description} />

      <DetailProperties
        fieldKey="Tarih"
        fieldValue={activity.startDate != '' ? new Date(activity.startDate).toLocaleDateString('tr-TR') : ''}
      />

      <DetailProperties
        fieldKey="Saat"
        fieldValue={activity.startDate != '' ? `${new Date(activity.startDate).toLocaleTimeString('tr-TR')}- ${new Date(activity.endDate).toLocaleTimeString('tr-TR')}` : ''}
      />

      <DetailProperties
        fieldKey="Katılım Ücreti"
        fieldValue={activity.ticketPrice == 0 ? 'Ücretsiz' : `${activity.ticketPrice} TL `}
      />

      <DetailProperties
        fieldKey="Kontenjan"
        fieldValue={`${activity.ticketCapacity} Kişi`}
      />

      <Title title="ETKİNLİK YÖNETİM HAKKINDA" />

      <DetailProperties
        fieldKey={activity.authorType?.name === 'Tiyatro' ? 'Yazar' : 'Sanatçı'}
        fieldValue={activity.authorInfo.author}
      />

      <DetailProperties
        fieldKey={activity.authorType?.name !== 'Tiyatro' ? 'Organizatör' : 'Yönetmen'}
        fieldValue={activity.authorInfo.directedBy}
      />

      <DetailProperties
        fieldKey={activity.authorType?.name === 'Tiyatro' ? 'Çeviren' : 'Sahne Tasarım'}
        fieldValue={activity.authorInfo.translator}
      />

      <Title title="ETKİNLİK YERİ" />

      <DetailProperties
        isPressable={true}
        fieldKey="Mekan Adı"
        fieldValue={activity.venue.name}
        onClick={() => navigation.navigate('VenueActivity', {venue: activity.venue})}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={coords}
        style={styles.mapView}>
        <Marker coordinate={coords} />
      </MapView>

      <DetailProperties
        fieldKey="Adres"
        fieldValue={`${activity.venue.address.openAddress} ${activity.venue.address.districtName} / ${activity.venue.address.cityName} `}
      />

      <DetailProperties
        fieldKey="İletişim Numarası"
        fieldValue={activity.venue.phoneNumber}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ActivityTicket', {activity})}>
        <Text style={styles.buttonText}>Bilet Al</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ActivityDetailScreen;

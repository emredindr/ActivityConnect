import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';
import {Divider} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import {Button, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailProperties from '../../components/DetailProperies/DetailProperties';
import Title from '../../components/Title/Title';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const ActivityDetailScreen = ({route, navigation}) => {
  const [activity] = useState(route.params.activity);

  const width = Dimensions.get('window').width;

  const coords = {
    latitude: activity.venue.address.latitude,
    longitude: activity.venue.address.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    navigation.setOptions({
      title: activity.name,
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
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View>
        <Carousel
          loop
          defaultIndex={0}
          width={width}
          height={width / 1.5}
          autoPlay={true}
          autoPlayInterval={5000}
          data={activity.images.filter(x => x.isDefault == false)}
          scrollAnimationDuration={3000}
          renderItem={({item}) => (
            <Card
              style={{
                flex: 1,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOpacity: 0.25,
                elevation: 5,
                margin: 10,
              }}>
              <Card.Title
                title="GALERİ"
                titleStyle={{
                  fontSize: 18,
                  color: '#00B9E8',
                }}
                left={() => (
                  <Icon name="image-multiple" size={25} color="#00B9E8" />
                )}
                right={
                  activity.isFavorite
                    ? () => <Icon name="star" size={25} color="#FFBF00" />
                    : ''
                }
                rightStyle={{
                  marginRight: 10,
                }}
              />

              <Card.Cover
                style={{
                  width: '100%',
                  height: 210,
                }}
                source={{
                  uri: item.url
                    ? item.url
                    : 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg',
                }}
                resizeMode="stretch"
              />
            </Card>
          )}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'right',
              padding: 10,
              color: '#00B9E8',
              fontWeight: '600',
              borderRadius: 10,
              backgroundColor: '#FFFDD0',
              margin: 10,
            }}>
            {activity.activityType.name}
          </Text>
        </View>
        <Title title="KONUSU" />
        <DetailProperties fieldValue={activity.description} />
        <DetailProperties
          fieldKey="Tarih"
          fieldValue={
            activity.startDate != ''
              ? new Date(activity.startDate).toLocaleDateString('tr-TR')
              : ''
          }
        />

        <DetailProperties
          fieldKey="Saat"
          fieldValue={
            activity.startDate != ''
              ? `${new Date(activity.startDate).toLocaleTimeString(
                  'tr-TR',
                )}- ${new Date(activity.endDate).toLocaleTimeString('tr-TR')}`
              : ''
          }
        />

        <DetailProperties
          fieldKey="Katılım Ücreti"
          fieldValue={
            activity.ticketPrice == 0
              ? 'Ücretsiz'
              : `${activity.ticketPrice} TL `
          }
        />

        <DetailProperties
          fieldKey="Kapasite"
          fieldValue={`${activity.ticketCapacity} Kişi`}
        />

        <Title title="ETKİNLİK YÖNETİM HAKKINDA" />

        <DetailProperties
          fieldKey="Yazar"
          fieldValue={activity.authorInfo.author}
        />
        <DetailProperties
          fieldKey="Yönetmen"
          fieldValue={activity.authorInfo.directedBy}
        />
        <DetailProperties
          fieldKey="Çeviri"
          fieldValue={activity.authorInfo.translator}
        />

        <Title title="ETKİNLİK YERİ" />
        <DetailProperties
          isPressable={true}
          fieldKey="Mekan Adı"
          fieldValue={activity.venue.name}
          onClick={() =>
            navigation.navigate('VenueActivity', {venue: activity.venue})
          }
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
        <DetailProperties
          fieldKey="Adres"
          fieldValue={`${activity.venue.address.openAddress} ${activity.venue.address.districtName} / ${activity.venue.address.cityName} `}
        />

        <DetailProperties
          fieldKey="İletişim Numarası"
          fieldValue={activity.venue.phoneNumber}
        />
      </View>
    </ScrollView>
  );
};

export default ActivityDetailScreen;

const styles = StyleSheet.create({});

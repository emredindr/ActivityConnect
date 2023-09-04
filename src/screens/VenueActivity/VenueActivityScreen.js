import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import activityService from '../../services/ActivityService';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VenueActivityScreen = ({route, navigation}) => {
  const {name, id} = route.params.venue;
  const [venue, setVenue] = useState({});

  const getVenueActivities = () => {
    activityService.getAllByVenueId(id).then(res => {
      if (res.IsError) return;
      setVenue(res.result);
    });
  };

  const renderImageData = images => {
    const image = images.find(x => x.isDefault === true);
    return image
      ? image.url
      : 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';
  };

  useEffect(() => {
    navigation.setOptions({
      title: name,
      headerTitleAlign: 'flex-start',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
    getVenueActivities();
  }, [navigation]);

  useEffect(() => {
    getVenueActivities();
  }, []);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          marginTop: 15,
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#00B9E8',
            textAlign: 'left',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Tüm Etkinlikler
        </Text>
      </View>
      <FlatList
        refreshing={true}
        data={venue.activities}
        scrollEnabled={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ActivityDetail', {activity: item})
            }>
            <Card
              style={{
                margin: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#00B9E8',
                backgroundColor: '#fff',
              }}>
              <Card.Title
                title={item.name}
                titleStyle={{
                  fontSize: 18,
                  color: '#00B9E8',
                  textAlign: 'center',
                }}
              />
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 3,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="clock" size={12} color="#00B9E8" />
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {new Date(item.startDate).toLocaleDateString('tr-Tr') +
                        ' - ' +
                        new Date(item.startDate).toLocaleTimeString('tr-TR')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="currency-usd" size={14} color="#00B9E8" />
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {item.ticketPrice == 0
                        ? 'ÜCRETSİZ'
                        : `${item.price} + TL`}
                    </Text>
                  </View>
                </View>
              </Card.Content>
              <Card.Cover
                source={{
                  uri: renderImageData(item.images),
                }}
                style={{
                  height: 400,
                  zIndex: -1,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  fontSize: 16,
                  color: '#00B9E8',
                  borderWidth: 1,
                  borderColor: '#00B9E8',
                  padding: 5,
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}>
                Detaylı Bilgi
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VenueActivityScreen;

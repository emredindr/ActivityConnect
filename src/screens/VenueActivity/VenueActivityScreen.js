import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import activityService from '../../services/ActivityService';

const VenueActivityScreen = ({route, navigation}) => {
  const {name, id} = route.params.venue;
  const [venue, setVenue] = useState([]);

  const getVenueActivities = () => {
    activityService.getAllByVenueId(id).then(res => {
      if (res.IsError) return;
      console.log(res.result.data);
      setVenue(res.result.data);
    });
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
      <Text>{venue[0].name}</Text>
    </View>
  );
};

export default VenueActivityScreen;

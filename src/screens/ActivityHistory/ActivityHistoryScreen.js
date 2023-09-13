import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import activityService from '../../services/ActivityService';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityHistoryScreen = () => {
  const [pastActivities, setPastActivities] = useState([]);

  const getPastActivities = () => {
    const startDate = new Date();
    startDate.setDate(startDate.getMonth() - 3);
    const endDate = new Date();

    activityService
      .getAll({activityTypeId: null, cityId: null, venueId: null, startDate, endDate})
      .then(res => {
        if (res.IsError) return;
        setPastActivities(res.result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPastActivities();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={pastActivities}
        renderItem={({item, index}) => (
          <ActivityCard
            item={item}
            index={index}
            isFavVisible={false}
            // onSelect={() => navigation.navigate('ActivityDetail', {activity: item})}
          />
        )}
      />
    </View>
  );
};

export default ActivityHistoryScreen;

const styles = StyleSheet.create({});

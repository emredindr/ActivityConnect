import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import activitiesService from '../../services/ActivitiesService';

const ActivityScreen = ({navigation}) => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    await activitiesService.getGetAll().then(res => {
      if (res.IsError) return;

      setActivities(res.result.data);
    });
  };

  useEffect(() => {
    getActivities();
  }, []);

  const goToActivityDetail = () => {
    navigation.navigate('ActivityDetail');
  };

  return (
    <View>
      <FlatList
        data={activities}
        renderItem={({item, index}) => <Text key={index}>{item.name}</Text>}
      />
      <Button title="Go to Activity Detail" onPress={goToActivityDetail} />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});

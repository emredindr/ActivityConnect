import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {getActivities} from '../../api/ActivityAPI';
import { Avatar } from 'react-native-paper';

const ActivityScreen = ({navigation}) => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
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

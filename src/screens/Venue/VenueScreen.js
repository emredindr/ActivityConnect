import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import venuesService from '../../services/VenuesService';

const VenueScreen = ({navigation}) => {
  const [venues, setVenues] = useState([]);

  const getVenues = async () => {
    await venuesService.getVenues().then(res => {
      if (res.IsError) return;

      setVenues(res.result.data);
    });
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={venues}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VenueDetail', {
                  venue: item,
                });
              }}
              key={index}
              style={{
                backgroundColor: 'white',
                padding: 10,
              }}>
              <Text style={styles.text}>{item.name}</Text>
              <Text></Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
  },
});

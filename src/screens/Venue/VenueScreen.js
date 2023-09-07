import {Text, View, FlatList, TouchableOpacity, Image, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import venueService from '../../services/VenueService';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import filter from 'lodash.filter';
import styles from './VenueScreen.Style';

const VenueScreen = ({navigation}) => {
  const [venues, setVenues] = useState([]);
  const [allVenues, setAllVenues] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  const getVenues = () => {
    venueService
      .getAll()
      .then(res => {
        if (res.IsError) return;

        setVenues(res.result.data);
        setAllVenues(res.result.data);
      })
      .finally(() => setLoading(false));
  };

  const handleSearch = query => {
    setSearchText(query);
    const filteredQuery = query.toLowerCase();
    const filteredData = filter(allVenues, item => {
      return contains(item, filteredQuery);
    });
    setVenues(filteredData);
  };

  const contains = ({name}, query) => {
    if (name.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };

  const onRefresh = () => {
    setLoading(true);
    getVenues();
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeText={text => handleSearch(text)}
        onPress={() => setIsFilterVisible(!isFilterVisible)}
        isIconVisible={false}
      />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
            />
          }
          data={venues}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('VenueDetail', {venue: item})}
              style={styles.venueContainer}>
              <Text style={styles.venueTitle}>{item.name}</Text>
              <Image
                style={styles.venueImage}
                source={{
                  uri: item.images[0].url,
                }}
              />
              <Text style={styles.goVenueDetailText}>Detaylı Gör</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default VenueScreen;

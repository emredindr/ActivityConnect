import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({searchText, onChangeText, onPressFilter,onPressHistory, isIconVisible = true}) => {
  return (
    <View style={styles.searchBarContainer}>
      {isIconVisible && (
        <Icon
          name="history"
          size={30}
          color="white"
          style={styles.searchBarHistoryIcon}
          onPress={onPressHistory}
        />
      )}
      <Searchbar
        style={styles.searchBarInput}
        placeholder="Ara...."
        onChangeText={onChangeText}
        value={searchText}
        color="#00B9E8"
        placeholderTextColor="#00B9E8"
        iconColor="#00B9E8"
        cursorColor="#00B9E8"
        autoCapitalize="none"
        inputStyle={{
          fontSize: 16,
          alignSelf: 'center',
        }}
      />

      {isIconVisible && (
        <Icon
          name="filter-plus-outline"
          size={30}
          color="white"
          style={styles.searchBarIcon}
          onPress={onPressFilter}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#00B9E8',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchBarInput: {
    backgroundColor: 'white',
    flex: 1,
    height: 30,
  },

  searchBarIcon: {
    marginLeft: 10,
  },
  searchBarHistoryIcon: {
    marginRight: 10,
  },
});

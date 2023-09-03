import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  dropdown: {
    flex: 1,
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    color: '#00B9E8',
    borderColor: '#00B9E8',
    padding: 12,
  },
  dropdownVenues: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00B9E8',
    padding: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#00B9E8',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#00B9E8',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#00B9E8',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

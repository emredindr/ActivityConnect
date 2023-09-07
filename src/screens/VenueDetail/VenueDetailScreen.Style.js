import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: 300,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  venueName: {fontSize: 20, fontWeight: 'bold'},
  venueDetailTexts: {fontSize: 15, fontWeight: 'bold'},
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  venueContainer: {
    backgroundColor: '#fff',
    borderColor: '#00B9E8',
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  venueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    marginLeft: 0,
    color: '#00B9E8',
    alignSelf: 'flex-start',
    padding: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  venueImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  goVenueDetailText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    color: '#00B9E8',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 8,
    borderTopLeftRadius: 10,
  },
});

import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#00B9E8',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchBarInput: {
    flex: 1,
    backgroundColor: 'white',
  },

  searchBarIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },

  totalCountText: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#00B9E8',
    fontSize: 16,
    margin: 10,
  },
  dividerContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
    margin: 10,
  },
  dividerText: {
    fontSize: 18,
    color: '#00B9E8',
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
  },
});

import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  totalCountText: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#00B9E8',
    fontSize: 16,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
    alignSelf: 'center',

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

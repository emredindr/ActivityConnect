import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {backgroundColor: 'white'},
  card: {
    height: 350,
    width: width,
    backgroundColor: 'white',
    marginVertical: -30,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    maxWidth: 300,
    maxHeight: 250,
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#00B9E8',
  },
  subjectText: {
    fontSize: 20,
    alignSelf: 'flex-end',
    textAlign: 'right',
    padding: 10,
    color: '#00B9E8',
    fontWeight: '600',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#E6F7FF',
  },
  mapView: {
    width: '100%',
    height: 300,
  },
  button: {
    margin: 10,
    backgroundColor: '#00B9E8',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

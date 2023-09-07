import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00B9E8',
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: 20,
    color: '#00B9E8',
    textAlign: 'center',
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
  },
  cardContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  cardContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {fontSize: 14, color: 'black'},
  textInfo: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 16,
    color: '#00B9E8',
    borderWidth: 1,
    borderColor: '#00B9E8',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

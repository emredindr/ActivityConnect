import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 15,
    margin: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00B9E8',
  },
  seatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00B9E8',
    padding: 10,
    margin: 10,
  },
  seat: {
    width: 26,
    height: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  seatText: {
    color: 'white',
  },
  sceneText: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
    color: '#00B9E8',
  },
  clearContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf:'flex-end',
    borderRadius: 20,
  },
  clearText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#CC3333',
  },
  clearIcon: {
    marginRight: 10,
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#00B9E8',
    marginTop: 15,
    margin: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00B9E8',
  },
  confirmButtonText: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  detailContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginTop: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#00B9E8',
  },
  activityNameText: {
    fontSize: 16,
    margin: 10,
  },
  selectedSeatDetailText: {
    fontSize: 16,
    margin: 10,
  },
  amountText: {
    alignSelf: 'center',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
  },
});
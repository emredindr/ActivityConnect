import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ActivityTicket = ({route}) => {
  const [activity] = useState(route.params.activity);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = seat => {
    const updatedSelectedSeats = [...selectedSeats];

    if (updatedSelectedSeats.includes(seat)) {
      // Deselect the seat
      const index = updatedSelectedSeats.indexOf(seat);
      updatedSelectedSeats.splice(index, 1);
    } else {
      // Select the seat
      updatedSelectedSeats.push(seat);
    }
    if (updatedSelectedSeats.length > 3) {
      Alert.alert('En fazla 3 koltuk seçebilirsiniz.');
    } else {
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  if (selectedSeats.length > 3) {
    Alert.alert('En fazla 4 koltuk seçebilirsiniz.');
  }

  const calculateAmount = () => {
    let amount = 0;
    selectedSeats.forEach(seat => {
      switch (seat.name) {
        case 'A':
          amount += 110;
          break;
        case 'B':
          amount += 80;
          break;
        case 'C':
          amount += 90;
          break;
        case 'D':
          amount += 75;
          break;
        case 'E':
          amount += 85;
          break;
        case 'F':
          amount += 65;
          break;
        case 'G':
          amount += 55;
          break;
        case 'H':
          amount += 45;
          break;
        case 'İ':
          amount += 35;
          break;
        case 'J':
          amount += 25;
          break;
        default:
          break;
      }
    });
    return `${amount} TL`;
  };

  const seatNameGenerator = (name, id) => {
    let seatNumber = id % 10;
    if (seatNumber == 0) {
      seatNumber = 10;
    }
    return `${name}${seatNumber}`;
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: 15,
          margin: 10,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#00B9E8',
        }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'left',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Sahne
        </Text>
      </View>
      {selectedSeats.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, textAlign: 'center', margin: 10}}>
            Seçimi Temizle
          </Text>
          <Icon
            name="clear"
            color="#CC3333"
            size={25}
            style={{marginRight: 10}}
            onPress={() => {
              setSelectedSeats([]);
            }}
          />
        </View>
      )}
      <>
        <View style={styles.seatContainer}>
          {seats.map(seat => (
            <TouchableOpacity
              key={seat.id}
              style={[
                styles.seat,
                {
                  backgroundColor: seat.isBooked
                    ? 'gray'
                    : selectedSeats.includes(seat)
                    ? '#00B9E8'
                    : 'green',
                },
              ]}
              onPress={() => toggleSeatSelection(seat)}
              disabled={seat.isBooked}>
              <Text style={styles.seatText}>
                {seatNameGenerator(seat.name, seat.id)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
      <View
        style={{
          alignItems: 'flex-start',
          backgroundColor: 'white',
          marginTop: 15,
          margin: 10,
          borderWidth: 1,
          borderColor: '#00B9E8',
        }}>
        <Text
          style={{
            fontSize: 16,
            margin: 10,
          }}>
          Etkinlik Adı :{'  '} {activity.name}
        </Text>

        <Text
          style={{
            fontSize: 16,
            margin: 10,
          }}>
          Seçilen Koltuklar :{'  '}
          {selectedSeats.length > 0
            ? selectedSeats
                .map(seat => seatNameGenerator(seat.name, seat.id))
                .join(', ')
            : 'Henüz koltuk seçilmedi.'}
        </Text>

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold',
            margin: 10,
          }}>
          Toplam Tutar :{'  '}
          {selectedSeats.length > 0 ? calculateAmount() : '0 TL'}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#00B9E8',
          marginTop: 15,
          margin: 10,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: '#00B9E8',
        }}
        onPress={() => {
          if (selectedSeats.length > 0) {
            Alert.alert(
              'Koltuk seçimi başarılı.',
              'Seçtiğiniz koltuklar: ' +
                selectedSeats
                  .map(seat => seatNameGenerator(seat.name, seat.id))
                  .join(' , '),
            );
          } else {
            Alert.alert('Lütfen en az 1 koltuk seçiniz.');
          }
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 'bold',
            color: 'white',
            margin: 10,
          }}>
          Ödemeyi Tamamla
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ActivityTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  seatText: {
    color: 'white',
  },
});

export const seats = [
  {id: 1, name: 'A', isBooked: true},
  {id: 2, name: 'A', isBooked: false},
  {id: 3, name: 'A', isBooked: false},
  {id: 4, name: 'A', isBooked: false},
  {id: 5, name: 'A', isBooked: false},
  {id: 6, name: 'A', isBooked: false},
  {id: 7, name: 'A', isBooked: false},
  {id: 8, name: 'A', isBooked: false},
  {id: 9, name: 'A', isBooked: false},
  {id: 10, name: 'A', isBooked: false},
  {id: 11, name: 'B', isBooked: false},
  {id: 12, name: 'B', isBooked: false},
  {id: 13, name: 'B', isBooked: false},
  {id: 14, name: 'B', isBooked: false},
  {id: 15, name: 'B', isBooked: false},
  {id: 16, name: 'B', isBooked: false},
  {id: 17, name: 'B', isBooked: false},
  {id: 18, name: 'B', isBooked: false},
  {id: 19, name: 'B', isBooked: false},
  {id: 20, name: 'B', isBooked: false},
  {id: 21, name: 'C', isBooked: false},
  {id: 22, name: 'C', isBooked: false},
  {id: 23, name: 'C', isBooked: false},
  {id: 24, name: 'C', isBooked: false},
  {id: 25, name: 'C', isBooked: false},
  {id: 26, name: 'C', isBooked: false},
  {id: 27, name: 'C', isBooked: false},
  {id: 28, name: 'C', isBooked: false},
  {id: 29, name: 'C', isBooked: false},
  {id: 30, name: 'C', isBooked: false},
  {id: 31, name: 'D', isBooked: false},
  {id: 32, name: 'D', isBooked: false},
  {id: 33, name: 'D', isBooked: false},
  {id: 34, name: 'D', isBooked: false},
  {id: 35, name: 'D', isBooked: false},
  {id: 36, name: 'D', isBooked: false},
  {id: 37, name: 'D', isBooked: false},
  {id: 38, name: 'D', isBooked: false},
  {id: 39, name: 'D', isBooked: false},
  {id: 40, name: 'D', isBooked: false},
  {id: 41, name: 'E', isBooked: false},
  {id: 42, name: 'E', isBooked: false},
  {id: 43, name: 'E', isBooked: false},
  {id: 44, name: 'E', isBooked: false},
  {id: 45, name: 'E', isBooked: false},
  {id: 46, name: 'E', isBooked: false},
  {id: 47, name: 'E', isBooked: false},
  {id: 48, name: 'E', isBooked: false},
  {id: 49, name: 'E', isBooked: false},
  {id: 50, name: 'E', isBooked: false},
  {id: 51, name: 'F', isBooked: false},
  {id: 52, name: 'F', isBooked: false},
  {id: 53, name: 'F', isBooked: false},
  {id: 54, name: 'F', isBooked: false},
  {id: 55, name: 'F', isBooked: false},
  {id: 56, name: 'F', isBooked: false},
  {id: 57, name: 'F', isBooked: false},
  {id: 58, name: 'F', isBooked: false},
  {id: 59, name: 'F', isBooked: false},
  {id: 60, name: 'F', isBooked: false},
  {id: 61, name: 'G', isBooked: false},
  {id: 62, name: 'G', isBooked: false},
  {id: 63, name: 'G', isBooked: false},
  {id: 64, name: 'G', isBooked: false},
  {id: 65, name: 'G', isBooked: false},
  {id: 66, name: 'G', isBooked: false},
  {id: 67, name: 'G', isBooked: false},
  {id: 68, name: 'G', isBooked: false},
  {id: 69, name: 'G', isBooked: false},
  {id: 70, name: 'G', isBooked: false},
  {id: 71, name: 'H', isBooked: false},
  {id: 72, name: 'H', isBooked: false},
  {id: 73, name: 'H', isBooked: false},
  {id: 74, name: 'H', isBooked: false},
  {id: 75, name: 'H', isBooked: false},
  {id: 76, name: 'H', isBooked: false},
  {id: 77, name: 'H', isBooked: false},
  {id: 78, name: 'H', isBooked: false},
  {id: 79, name: 'H', isBooked: false},
  {id: 80, name: 'H', isBooked: false},
  {id: 81, name: 'İ', isBooked: false},
  {id: 82, name: 'İ', isBooked: false},
  {id: 83, name: 'İ', isBooked: false},
  {id: 84, name: 'İ', isBooked: false},
  {id: 85, name: 'İ', isBooked: false},
  {id: 86, name: 'İ', isBooked: false},
  {id: 87, name: 'İ', isBooked: false},
  {id: 88, name: 'İ', isBooked: false},
  {id: 89, name: 'İ', isBooked: false},
  {id: 90, name: 'İ', isBooked: false},
  {id: 91, name: 'J', isBooked: false},
  {id: 92, name: 'J', isBooked: false},
  {id: 93, name: 'J', isBooked: false},
  {id: 94, name: 'J', isBooked: false},
  {id: 95, name: 'J', isBooked: false},
  {id: 96, name: 'J', isBooked: false},
  {id: 97, name: 'J', isBooked: false},
  {id: 98, name: 'J', isBooked: false},
  // Add more seat data here
];

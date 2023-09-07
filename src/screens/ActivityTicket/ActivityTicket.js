import {Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './ActivityTicket.Style';

const ActivityTicket = ({route}) => {
  const [activity] = useState(route.params.activity);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = seat => {
    const updatedSelectedSeats = [...selectedSeats];
    const index = updatedSelectedSeats.indexOf(seat);
    index !== -1 ? updatedSelectedSeats.splice(index, 1) : updatedSelectedSeats.push(seat);

    updatedSelectedSeats.length > 3 ? Alert.alert('En fazla 3 koltuk seçebilirsiniz.') : setSelectedSeats(updatedSelectedSeats);
  };

  const calculateAmount = () => {
    const seatPrices = {A: 110, B: 80, C: 90, D: 75, E: 85, F: 65, G: 55, H: 45, İ: 35, J: 25};
    if (activity.ticketPrice !== 0) {
      const amount = selectedSeats.reduce((total, seat) => total + seatPrices[seat.name], activity.ticketPrice);
      return `${amount} TL`;
    } else {
      return 'Ücretsiz';
    }
  };

  const seatNameGenerator = (name, id) => {
    const seatNumber = id % 10 === 0 ? 10 : id % 10;
    return `${name}${seatNumber}`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sceneContainer}>
        <Text style={styles.sceneText}>Sahne</Text>
      </View>
      {selectedSeats.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setSelectedSeats([]);
          }}
          style={styles.clearContainer}>
          <Text style={styles.clearText}>Seçimi Temizle</Text>
          <Icon
            name="clear"
            color="#CC3333"
            size={25}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
      <>
        <View style={styles.seatContainer}>
          {seats.map(seat => (
            <TouchableOpacity
              key={seat.id}
              style={[
                styles.seat,
                {
                  backgroundColor: seat.isBooked ? 'gray' : selectedSeats.includes(seat) ? 'green' : '#00B9E8',
                },
              ]}
              onPress={() => toggleSeatSelection(seat)}
              disabled={seat.isBooked}>
              <Text style={styles.seatText}>{seatNameGenerator(seat.name, seat.id)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
      <View style={styles.detailContainer}>
        <Text style={styles.activityNameText}>
          Etkinlik Adı :{'  '} {activity.name}
        </Text>

        <Text style={styles.selectedSeatDetailText}>
          Seçilen Koltuklar :{'  '}
          {selectedSeats.length > 0 ? selectedSeats.map(seat => seatNameGenerator(seat.name, seat.id)).join(', ') : 'Henüz koltuk seçilmedi.'}
        </Text>

        <Text style={styles.amountText}>
          Toplam Tutar :{'  '}
          {selectedSeats.length > 0 ? calculateAmount() : '0 TL'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          if (selectedSeats.length > 0) {
            Alert.alert('Koltuk seçimi başarılı.', 'Seçtiğiniz koltuklar: ' + selectedSeats.map(seat => seatNameGenerator(seat.name, seat.id)).join(' , '));
          } else {
            Alert.alert('Lütfen en az 1 koltuk seçiniz.');
          }
        }}>
        <Text style={styles.confirmButtonText}>Ödemeyi Tamamla</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ActivityTicket;

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

import {Text, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ActivityCard.Styles';

const ActivityCard = ({item, onSelect, isFavVisible = true, onPressFav, isFav = false}) => {
  const renderImageData = images => {
    const image = images.find(x => x.isDefault === true);
    return image ? image.url : 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg';
  };
  return (
    <TouchableOpacity onPress={onSelect}>
      <Card style={styles.card}>
        <Card.Title
          title={item.name}
          subtitle={
            <>
              <Icon
                name="map-marker"
                size={14}
                color="#00B9E8"
              />
              <Text style={styles.cardText}>{item.venue.name}</Text>
            </>
          }
          titleStyle={styles.cartTitle}
          right={() =>
            isFavVisible === true ? (
              <Icon
                onPress={onPressFav}
                name={isFav ? 'heart' : 'heart-outline'}
                size={30}
                color="#00B9E8"
              />
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: '#F5F5F5',
                  backgroundColor: '#00B9E8',
                  borderRadius: 10,
                  padding: 5,
                }}>
                PASSED
              </Text>
            )
          }
          rightStyle={{
            marginRight: isFavVisible === true ? 30 : 10,
            marginTop: isFavVisible === true ? 0 : 10,
            bottom: 14,
          }}
        />

        <Card.Content>
          <View style={styles.cardContentContainer}>
            <View style={styles.cardContainerRow}>
              <Icon
                name="clock"
                size={12}
                color="#00B9E8"
              />
              <Text style={styles.cardText}>{new Date(item.startDate).toLocaleDateString('tr-Tr') + ' - ' + new Date(item.startDate).toLocaleTimeString('tr-TR')}</Text>
            </View>
            <View style={styles.cardContainerRow}>
              <Icon
                name="currency-usd"
                size={14}
                color="#00B9E8"
              />
              <Text style={styles.cardText}>{item.ticketPrice == 0 ? 'ÜCRETSİZ' : `${item.ticketPrice} TL`}</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Cover
          source={{
            uri: renderImageData(item.images),
          }}
          style={{
            height: 400,
            zIndex: -1,
          }}
          resizeMode="contain"
        />
        <Text style={styles.textInfo}>Detaylı Bilgi</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default ActivityCard;

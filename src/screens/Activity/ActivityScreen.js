import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import activityService from '../../services/ActivityService';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import venueService from '../../services/VenueService';
import activityTypeService from '../../services/ActivityTypeService';
import cityService from '../../services/CityService';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Carousel from 'react-native-reanimated-carousel';
import {Button, Card} from 'react-native-paper';

const ActivityScreen = ({navigation}) => {
  const [activities, setActivities] = useState([]);
  const [cityId, setCityId] = useState(null);
  const [venueId, setVenueId] = useState(null);
  const [activityTypeId, setActivityTypeId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [venues, setVenues] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);

  const width = Dimensions.get('window').width;

  const getActivities = async () => {
    await activityService.getAll().then(res => {
      if (res.IsError) return;
      setActivities(res.result.data);
    });
  };

  const showOrHideStartDatePicker = () => {
    setStartDatePickerVisibility(!isStartDatePickerVisible);
  };

  const showOrHideEndDatePicker = () => {
    setEndDatePickerVisibility(!isEndDatePickerVisible);
  };

  const handleConfirmStartDate = startDate => {
    setStartDate(startDate);
    showOrHideStartDatePicker();
  };

  const handleConfirmEndDate = endDate => {
    setEndDate(endDate);
    showOrHideEndDatePicker();
  };

  const getStartDate = () => {
    let newDate = new Date(startDate).toLocaleDateString();
    return startDate !== '' ? newDate : '';
  };

  const getEndDate = () => {
    let newDate = new Date(endDate).toLocaleDateString();
    return endDate !== '' ? newDate : '';
  };

  const getActivityTypes = async () => {
    await activityTypeService.getAll().then(res => {
      if (res.IsError) return;

      setActivityTypes(res.result.data);
    });
  };

  const getCities = async () => {
    await cityService.getAll().then(res => {
      if (res.IsError) return;

      setCities(res.result.data);
    });
  };

  const handleOnChangeActivityType = item => {
    setActivityTypeId(item.id);
  };

  const handleOnChangeCity = item => {
    setCityId(item.id);

    onCitySelected(item.id);
  };

  const handleOnChangeVenue = item => {
    setVenueId(item.id);
  };

  const onCitySelected = async cityId => {
    await venueService.getAllByCityId(cityId).then(res => {
      if (res.IsError) return;
      setVenues(res.result.data);
    });
  };

  const clearInput = () => {
    setActivityTypeId(null);
    setCityId(null);
    setVenueId(null);
    setEndDate('');
    setStartDate('');
  };

  useEffect(() => {
    getActivityTypes();
    getCities();
    getActivities();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#00B9E8',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <Searchbar
          style={{flex: 1, backgroundColor: 'white'}}
          placeholder="Ara...."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          color="#00B9E8"
          placeholderTextColor="#00B9E8"
          iconColor="#00B9E8"
          cursorColor="#00B9E8"
          autoCapitalize="none"
        />
        <Icon
          name="filter-plus-outline"
          size={30}
          color="white"
          style={{alignSelf: 'center', marginLeft: 10}}
          onPress={() => setFilterVisible(!filterVisible)}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          display: filterVisible ? 'flex' : 'none',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Dropdown
            data={activityTypes}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder="Etkinlik Türü Seç"
            searchPlaceholder="Ara ..."
            value={activityTypeId}
            search
            onChange={handleOnChangeActivityType}
            // renderItem={renderCategoryTypeIt}
          />
          <Dropdown
            data={cities}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder="İl Seçiniz "
            searchPlaceholder="Ara ..."
            value={cityId}
            search
            onChange={handleOnChangeCity}
            // renderItem={renderCategoryTypeIt}
          />
        </View>
        <View style={{}}>
          <Dropdown
            data={venues}
            style={styles.dropdownVenues}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder="Mekan Seçiniz "
            searchPlaceholder="Ara ..."
            value={venueId}
            disable={cityId === null ? true : false}
            search
            onChange={handleOnChangeVenue}
            // renderItem={renderCategoryTypeIt}
          />
        </View>
        <View
          style={{
            margin: 16,
            height: 50,
            backgroundColor: 'white',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#00B9E8',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={showOrHideStartDatePicker}>
            <TextInput
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#00B9E8',
                placeholderTextColor: '#00B9E8',
              }}
              value={getStartDate()}
              placeholder="Başlangıç Tarihi"
              placeholderTextColor="#00B9E8"
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="date"
            minimumDate={new Date()}
            maximumDate={new Date('2024-1-1')}
            onConfirm={handleConfirmStartDate}
            onCancel={showOrHideStartDatePicker}
          />
          <TouchableOpacity onPress={showOrHideEndDatePicker}>
            <TextInput
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#00B9E8',
              }}
              value={getEndDate()}
              placeholder="Bitiş Tarihi"
              placeholderTextColor="#00B9E8"
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="date"
            minimumDate={new Date()}
            maximumDate={new Date('2024-1-1')}
            onConfirm={handleConfirmEndDate}
            onCancel={showOrHideEndDatePicker}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 12,
          }}>
          <Button
            mode="outlined"
            onPress={() => clearInput()}
            style={{flex: 1, borderWidth: 1, borderColor: '#00B9E8', margin: 2}}
            textColor="#00B9E8">
            Sıfırla
          </Button>
          <Button
            mode="outlined"
            onPress={() =>
              console.log(
                'VenueId: ' +
                  venueId +
                  ' CityId: ' +
                  cityId +
                  ' ActivityTypeId: ' +
                  activityTypeId,
                'StartDate: ' + getStartDate(),
                'EndDate: ' + getE(),
              )
            }
            style={{flex: 1, borderWidth: 1, borderColor: '#00B9E8', margin: 2}}
            textColor="#00B9E8">
            Filtrele
          </Button>
        </View>
      </View>

      <FlatList
        data={activities}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('ActivityDetailScreen', {
                activity: item,
              })
            }>
            <Card
              style={{
                margin: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#00B9E8',
                backgroundColor: '#fff',
              }}>
              <Card.Title
                title={item.name}
                subtitle={
                  <>
                    <Icon name="map-marker" size={14} color="#00B9E8" />
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {item.venue.name}
                    </Text>
                  </>
                }
                titleStyle={{
                  fontSize: 18,
                  color: '#00B9E8',
                  textAlign: 'center',
                }}
              />
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 3,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="clock" size={12} color="#00B9E8" />
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {new Date(item.startDate).toLocaleDateString('tr-Tr') +
                        ' - ' +
                        new Date(item.startDate).toLocaleTimeString('tr-TR')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="currency-usd" size={14} color="#00B9E8" />
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {item.ticketPrice == 0
                        ? 'ÜCRETSİZ'
                        : `${item.price} + TL`}
                    </Text>
                  </View>
                </View>
              </Card.Content>
              <Card.Cover
                source={{
                  uri:
                    item.images[0].url !== null
                      ? item.images[0].url
                      : 'https://t4.ftcdn.net/jpg/03/15/18/09/240_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg',
                }}
                style={{
                  height: 200,
                  resizeMode: 'contain',
                  zIndex: -1,
                }}
              />
              <Text
                style={{
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
                }}>
                Detaylı Bilgi
              </Text>
            </Card>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    color: '#00B9E8',
    borderColor: '#00B9E8',
    padding: 12,
  },
  dropdownVenues: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00B9E8',
    padding: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#00B9E8',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#00B9E8',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#00B9E8',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

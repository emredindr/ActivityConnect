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
} from 'react-native';
import activityService from '../../services/ActivityService';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {Button} from 'react-native-paper';
import venueService from '../../services/VenueService';
import activityTypeService from '../../services/ActivityTypeService';
import cityService from '../../services/CityService';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {blue} from 'react-native-reanimated';

const ActivityScreen = ({navigation}) => {
  const [activities, setActivities] = useState([
    {name: 'Etkinlik 1'},
    {name: 'Etkinlik 2'},
    {name: 'Etkinlik 3'},
    {name: 'Etkinlik 4'},
  ]);
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
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <Searchbar
          style={{flex: 1}}
          placeholder="Search"
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
        <Icon
          name="filter-plus-outline"
          size={30}
          color="gray"
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
            borderColor: 'gray',
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
              }}
              value={getStartDate()}
              placeholder="Başlangıç Tarihi"
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
              }}
              value={getEndDate()}
              placeholder="Bitiş Tarihi"
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
            justifyContent: 'space-between',
          }}>
          <Button
            mode="outlined"
            onPress={() => clearInput()}
            style={{flex: 1, margin: 5, borderWidth: 1}}>
            Temizle
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
            style={{flex: 1, margin: 5}}>
            Filtrele
          </Button>
        </View>
      </View>

      <View />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{margin: 10, fontSize: 20}}>Etkinlikler</Text>
        <Text style={{margin: 10, fontSize: 20}}>Tümünü Gör</Text>
      </View>
      <FlatList
        data={activities}
        renderItem={({item, index}) => (
          <Text
            key={index}
            style={{
              padding: 10,
              margin: 10,
              borderRadius: 10,
              backgroundColor: 'blue',
            }}>
            {item.name}
          </Text>
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
    borderColor: 'gray',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdownVenues: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

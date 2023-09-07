import {useState, useEffect, useCallback} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity, Dimensions, ScrollView, RefreshControl} from 'react-native';
import activityService from '../../services/ActivityService';
import filter from 'lodash.filter';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import venueService from '../../services/VenueService';
import activityTypeService from '../../services/ActivityTypeService';
import cityService from '../../services/CityService';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Loading from '../../components/Loading/Loading';
import CustomDropdown from '../../components/Dropdown/Dropdown';
import styles from './ActivityScreen.Style';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';

const ActivityScreen = ({navigation}) => {
  const [activities, setActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [searchParams, setSearchParams] = useState({activityTypeId: null, cityId: null, venueId: null, startDate: null, endDate: null});
  const [searchText, setSearchText] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [venues, setVenues] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [loading, setLoading] = useState(true);

  const getActivities = searchParams => {
    activityService
      .getAll(searchParams)
      .then(res => {
        if (res.IsError) return;
        setActivities(res.result.data);
        setAllActivities(res.result.data);
      })
      .finally(() => setLoading(false));
  };

  const getActivityTypes = () => {
    activityTypeService.getAll().then(res => {
      if (res.IsError) return;

      setActivityTypes(res.result.data);
    });
  };

  const getCities = () => {
    cityService.getAll().then(res => {
      if (res.IsError) return;

      setCities(res.result.data);
    });
  };

  const showOrHideStartDatePicker = () => {
    setStartDatePickerVisibility(!isStartDatePickerVisible);
  };

  const showOrHideEndDatePicker = () => {
    setEndDatePickerVisibility(!isEndDatePickerVisible);
  };

  const handleConfirmStartDate = startDate => {
    setSearchParams({...searchParams, startDate});
    if (searchParams.endDate !== null) {
      if (startDate > searchParams.endDate) {
        setSearchParams({...searchParams, endDate: startDate});
        getEndDate;
      }
    }
    showOrHideStartDatePicker();
  };

  const handleConfirmEndDate = endDate => {
    setSearchParams({...searchParams, endDate});
    showOrHideEndDatePicker();
  };

  const getStartDate = () => {
    return searchParams.startDate !== null ? `${searchParams.startDate.getDate()}-${searchParams.startDate.getMonth() + 1}-${searchParams.startDate.getFullYear()}` : null;
  };

  const getEndDate = () => {
    return searchParams.endDate !== null ? `${searchParams.endDate.getDate()}-${searchParams.endDate.getMonth() + 1}-${searchParams.endDate.getFullYear()}` : null;
  };

  const handleOnChangeActivityType = item => {
    setSearchParams({...searchParams, activityTypeId: item.id});
  };

  const handleOnChangeCity = item => {
    setSearchParams({...searchParams, cityId: item.id});

    onCitySelected(item.id);
  };

  const handleOnChangeVenue = item => {
    setSearchParams({...searchParams, venueId: item.id});
  };

  const onCitySelected = async cityId => {
    await venueService.getAllByCityId(cityId).then(res => {
      if (res.IsError) return;
      setVenues(res.result.data);
    });
  };

  const handleOnPressFilter = filterParams => {
    getActivities(filterParams);

    setIsFilterVisible(false);
  };

  const handleSearch = query => {
    setSearchText(query);
    const filteredQuery = query.toLowerCase();
    const filteredData = filter(allActivities, item => {
      return contains(item, filteredQuery);
    });
    setActivities(filteredData);
  };

  const contains = ({name}, query) => {
    if (name.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };

  const clearInput = () => {
    setSearchParams({activityTypeId: null, cityId: null, venueId: null, startDate: null, endDate: null});
    getActivities(searchParams);
    setIsFilterVisible(false);
  };

  const onRefresh = useCallback(async () => {
    setLoading(true);
    getActivities(searchParams);
  }, []);

  useEffect(() => {
    getActivityTypes();
    getCities();
    getActivities(searchParams);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeText={text => handleSearch(text)}
        onPress={() => setIsFilterVisible(!isFilterVisible)}
      />

      {isFilterVisible && (
        <View
          style={{
            backgroundColor: '#fff',
            padding: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <CustomDropdown
              data={activityTypes}
              labelField="name"
              valueField="id"
              placeholder="Etkinlik Türü"
              searchPlaceholder="Ara ..."
              value={searchParams.activityTypeId}
              onChange={handleOnChangeActivityType}
            />
            <CustomDropdown
              data={cities}
              labelField="name"
              valueField="id"
              placeholder="İl Seçiniz "
              value={searchParams.cityId}
              onChange={handleOnChangeCity}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomDropdown
              data={venues}
              labelField="name"
              valueField="id"
              placeholder="Mekan Seçiniz "
              value={searchParams.venueId}
              disable={searchParams.cityId === null ? true : false}
              onChange={handleOnChangeVenue}
            />
          </View>
          <View
            style={{
              margin: 16,
              height: 30,
              backgroundColor: 'white',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#00B9E8',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={showOrHideStartDatePicker}>
              <TextInput
                style={{
                  padding: 0,
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#00B9E8',
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
                  padding: 0,
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
              minimumDate={searchParams.startDate !== null ? new Date(searchParams.startDate) : new Date()}
              maximumDate={new Date('2024-1-1')}
              onConfirm={handleConfirmEndDate}
              onCancel={showOrHideEndDatePicker}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: 16,
              justifyContent: 'space-evenly',
              height: 30,
            }}>
            <TouchableOpacity
              onPress={clearInput}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#00B9E8',
                borderRadius: 12,
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: '#00B9E8',
                  textAlign: 'center',
                  fontSize: 16,
                  padding: 5,
                }}>
                Temizle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOnPressFilter(searchParams)}
              style={{
                marginLeft: 10,
                flex: 1,
                borderWidth: 1,
                borderColor: '#00B9E8',
                borderRadius: 12,
              }}
              textColor="#00B9E8">
              <Text
                style={{
                  color: '#00B9E8',
                  textAlign: 'center',
                  fontSize: 16,
                  padding: 5,
                }}>
                Filtrele
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
            />
          }>
          {searchText.length === 0 && activities.length > 0 && <CustomCarousel data={activities.filter(x => x.isFavorite == true)} />}

          {!searchText.length > 0 && !activities.length < 1 && (
            <View style={styles.dividerContainer}>
              <Text style={styles.dividerText}>Tüm Etkinlikler</Text>
            </View>
          )}
          <FlatList
            data={activities}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <ActivityCard
                item={item}
                index={index}
                onSelect={() => navigation.navigate('ActivityDetail', {activity: item})}
              />
            )}
          />

          {activities.length < 1 ? <Text style={styles.totalCountText}>Aradığınız kısıtta etkinlik bulunamamıştır.</Text> : <Text style={styles.totalCountText}>Toplam {activities.length} etkinlik bulundu.</Text>}
        </ScrollView>
      )}
    </View>
  );
};

export default ActivityScreen;

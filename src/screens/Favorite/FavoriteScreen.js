import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useContext, useEffect} from 'react';
import {Context as FavoriteContext} from '../../context/FavoriteContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const FavoriteScreen = ({navigation}) => {
  const {state, removeFavorite, clearFavorites} = useContext(FavoriteContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={clearFavorites}>
          <Icon
            name="delete-forever"
            size={30}
            color="red"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {state?.length <= 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Henüz favorileriniz yok !</Text>
        </View>
      ) : (
        <FlatList
          data={state}
          renderItem={({item, index}) => (
            <ActivityCard
              item={item}
              index={index}
              onSelect={() => navigation.navigate('ActivityDetail', {activity: item})}
              onPressFav={() => removeFavorite(item)}
              isFav={true}
            />
          )}
        />
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

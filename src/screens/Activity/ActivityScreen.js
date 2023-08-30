import {StyleSheet, Text, View, Button} from 'react-native';

const ActivityScreen = ({navigation}) => {
  const goToActivityDetail = () => {
    navigation.navigate('ActivityDetail');
  };
  return (
    <View>
      <Text style={{fontSize: 20}}>ActivityScreen </Text>
      <Button title="Go to Activity Detail" onPress={goToActivityDetail} />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({});

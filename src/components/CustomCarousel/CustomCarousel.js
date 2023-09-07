import {StyleSheet, Dimensions, Image, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomCarousel = ({data}) => {
  const renderImageData = images => {
    if (images.length > 0) {
      return images[0].url;
    }
    return 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
  };

  return (
    <Carousel
      loop
      width={width}
      height={height / 2.82}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={5000}
      mode="parallax"
      renderItem={({index}) => (
        <Card style={styles.card}>
          <Card.Title
            left={() => (
              <Icon
                name="star"
                size={40}
                color="#FFBF00"
              />
            )}
            title={data[index].name}
            titleStyle={styles.title}
          />
          <Image
            style={styles.image}
            source={{
              uri: renderImageData(data[index].images),
            }}
          />
        </Card>
      )}
    />
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  card: {
    height: 350,
    width: width,
    backgroundColor: 'white',
    marginVertical: -30,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    maxWidth: 300,
    maxHeight: 250,
    alignSelf: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#00B9E8',
  },
});

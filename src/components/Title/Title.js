import {View, Text} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';

export default function Title({title}) {
  return (
    <View>
      <Divider
        style={{
          backgroundColor: '#F5F5DC',
          margin: 10,
          height: 1,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'left',
          padding: 10,
          color: '#212121',
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </View>
  );
}

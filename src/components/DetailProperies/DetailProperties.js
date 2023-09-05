import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';

const DetailProperties = ({fieldKey, fieldValue, isPressable = false,onClick}) => {
  
  return (
    <View>
      <Divider
        style={{
          backgroundColor: '#F5F5DC',
          margin: 10,
          height: 1,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {fieldKey && (
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'left',
              padding: 10,
              color: '#212121',
              fontWeight: '600',
            }}>
            {fieldKey} :
          </Text>
        )}
        {isPressable == false ? (
          <>
            {fieldValue.length > 25 ? (
              <TextInput
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#636363',
                  flex: 1,
                }}
                multiline={true}
                value={fieldValue}
                editable={false}
              />
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'left',
                  padding: 10,
                  color: '#636363',
                }}>
                {fieldValue}
              </Text>
            )}
          </>
        ) : (
          <TouchableOpacity
          onPress={onClick}
          >
            {fieldValue.length > 40 ? (
              <TextInput
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: '#00B9E8',
                  flex: 1,
                }}
                multiline={true}
                value={fieldValue}
                editable={false}
              />
            ) : (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'left',
                  padding: 10,
                  color: '#00B9E8',
                }}>
                {fieldValue}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DetailProperties;

const styles = StyleSheet.create({});

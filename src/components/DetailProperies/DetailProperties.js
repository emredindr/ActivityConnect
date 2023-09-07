import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';

const DetailProperties = ({fieldKey, fieldValue, isPressable = false, onClick}) => {
  return (
    <>
      <Divider style={styles.divider} />
      <View style={styles.textContainer}>
        {fieldKey && <Text style={styles.keyText}>{fieldKey} :</Text>}
        {isPressable == false ? (
          <>
            {fieldValue.length > 25 ? (
              <TextInput
                style={styles.valueInputText}
                multiline={true}
                value={fieldValue}
                editable={false}
              />
            ) : (
              <Text style={styles.valueText}>{fieldValue}</Text>
            )}
          </>
        ) : (
          <TouchableOpacity onPress={onClick}>
            {fieldValue.length > 40 ? (
              <TextInput
                style={styles.valueTextInputPressable}
                multiline={true}
                value={fieldValue}
                editable={false}
              />
            ) : (
              <Text style={styles.valueTextPressable}>{fieldValue}</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default DetailProperties;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#F5F5DC',
    margin: 10,
    height: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 10,
    color: '#212121',
    fontWeight: '600',
  },
  valueInputText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#636363',
    flex: 1,
  },
  valueText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'left',
    padding: 10,
    color: '#636363',
  },
  valueTextInputPressable: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00B9E8',
    flex: 1,
  },
  valueTextPressable: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'left',
    padding: 10,
    color: '#00B9E8',
  },
});

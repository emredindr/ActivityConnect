import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

const CustomDropdown = ({data, labelField, valueField, placeholder, value, onChange, ...rest}) => {
  return (
    <Dropdown
      {...rest}
      data={data}
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      searchPlaceholder="Ara ..."
      value={value}
      search
      onChange={onChange}
    />
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    margin: 16,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    color: '#00B9E8',
    borderColor: '#00B9E8',
    padding: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#00B9E8',
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#00B9E8',
    textAlign: 'center',
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

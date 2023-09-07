import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RadioButton} from 'react-native-paper';
import {Context as AuthContext} from '../../context/AuthContext';
import styles from './RegisterScreen.Style';

const RegisterScreen = () => {
  const [name, setName] = useState('TestName');
  const [surname, setSurname] = useState('TestSurname');
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('asd123asd');
  const [userName, setUserName] = useState('testUser');
  const [phoneNumber, setPhoneNumber] = useState('11111111111');
  const [gender, setGender] = useState('erkek');
  const [birthdate, setBirthdate] = useState('1990-01-01');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {signup} = useContext(AuthContext);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    setBirthdate(formattedDate);
    hideDatePicker();
  };

  const handleSubmit = () => {
    if (!name || !surname || !email || !password || !userName || !phoneNumber || !gender || !birthdate) {
      alert('Please fill in all fields.');
      return;
    }
    signup({name, surname, email, password, userName, phoneNumber, gender, birthdate});
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <Text>Surname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Text>User Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Text>Gender:</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          <Text>Male</Text>
          <RadioButton
            value="erkek"
            status={gender === 'erkek' ? 'checked' : 'unchecked'}
            onPress={() => setGender('erkek')}
          />
        </View>
        <View style={styles.radioButton}>
          <Text>Female</Text>
          <RadioButton
            value="kız"
            status={gender === 'kız' ? 'checked' : 'unchecked'}
            onPress={() => setGender('kız')}
          />
        </View>
        <View style={styles.radioButton}>
          <Text>Other</Text>
          <RadioButton
            value="diger"
            status={gender === 'diger' ? 'checked' : 'unchecked'}
            onPress={() => setGender('diger')}
          />
        </View>
      </View>
      <Text>Birthdate:</Text>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          style={styles.input}
          value={birthdate}
          placeholder="Select Date"
          editable={false}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={new Date('1990-01-01')}
        minimumDate={new Date('1950-01-01')}
        maximumDate={new Date('2010-01-01')}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        style={styles.submitButton}
      />
    </View>
  );
};

export default RegisterScreen;

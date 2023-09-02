import createDataContext from './createDataContext';
import Config from 'react-native-config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {user: action.payload};
    case 'signout':
      return {user: null};
    default:
      return state;
  }
};

const signup = dispacth => {
  return ({email, password}) => {};
};

const signin =
  dispacth =>
  async ({email, password}) => {
    try {
      const response = await axios.post(Config.API_Local_URL + 'Auth/Login', {
        email,
        password,
      });
      await AsyncStorage.setItem('@USER', JSON.stringify(response.data.result));
      dispacth({type: 'signin', payload: response.data.result});
    } catch (error) {
      console.log(error.message);
    }
  };

const signout = dispacth => async () => {
  await AsyncStorage.removeItem('@USER');
  dispacth({type: 'signout'});
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {user: null},
);

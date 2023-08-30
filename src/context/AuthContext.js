import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    // case 'add_user':
    //   return [...state, action.payload];
    default:
      return state;
  }
};

const signup = dispacth => {
  return ({email, password}) => {
    // make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect an error message somewhere
  };
};

const signin = dispacth => {
  return ({email, password}) => {
    // try to signin
    // handle success by updating state
    // handle failure by showing error message (somehow)
  };
};

const signout = dispacth => {
  return () => {
    // somehow sign out!!!
  };
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false},
);

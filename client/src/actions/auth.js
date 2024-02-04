import * as api from '../api';
import {setCurrentUser} from './currentUser';


export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: 'auth', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/');
  } catch (error) {
    console.error('Signup Error:', error);
    
  }
}

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: 'auth', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/');
  } catch (error) {
    console.error('Login Error:', error);
 
  }
}

import {
    LOGIN_REQUESTING,
    LOGOUT_REQUESTING
  } from '../ConstantsList'
  
  // In order to perform an action of type LOGIN_REQUESTING
  // we need an email and password
  export const loginRequest = function loginRequest ( email:any, password:any ) {

    return {
      type: LOGIN_REQUESTING,
      email:email,
      password:password,
    }
  }
  export const logoutRequest = function logoutRequest (  ) {
  
    return {
      type: LOGOUT_REQUESTING
    }
  }

  
  

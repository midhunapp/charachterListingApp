import {
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    LOGOUT_REQUESTING
  } from '../ConstantsList'
  
  const initialState = {
    requesting: false,
    successful: false,
    loginStatus: '',
   // errors: [],
  }

 const reducer = function loginReducer (state = initialState, action:any) {

    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case LOGIN_REQUESTING:
        return {
          requesting: true,
          successful: false,
          //messages: [{ body: 'Logging in...', time: new Date() }],
          //errors: [],
        }
  
      // Successful?  Reset the login state.
      case LOGIN_SUCCESS:
        return {
          ...state,
          requesting: false,
          successful: true,
          loginStatus:'Login successfull'
        }
  
        case LOGIN_ERROR:
          return {
            //errors: [],
            //messages: [],
            requesting: false,
            successful: false,
            loginStatus:'Something went wrong'
          }
          case LOGOUT_REQUESTING:
            return {
              requesting: false,
              successful: false,
              loginStatus:''
            }
          case LOGOUT_SUCCESS:
            return {
              requesting: false,
              successful: true,
              loginStatus:''
            }
      default:
        return state
    }
  }
  
  export default   reducer
import {
    FETCH_CHAR_REQUESTING,
    FETCH_CHAR_SUCCESS,
    FETCH_CHAR_ERROR,
    SEARCH_CHAR
  } from '../ConstantsList'
  
  const initialState = {
    charachertList: [],
    successful: false,
    errors: '',
    requesting:false,
    requestCompleted:false
  }

 const reducer = function CharacterListingReducer (state = initialState, action:any) {

    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case FETCH_CHAR_REQUESTING:
        return {
          ...state,
          requesting: true,
          successful: false,
          requestCompleted:false,
          charachertList: [],
          errors:'',
        }
  
      // Successful?  Reset the login state.
      case FETCH_CHAR_SUCCESS:
        return {
          ...state,
          requesting: false,
          successful: true,
          requestCompleted:true,
          charachertList: action.data,
          errors:'',
        }
  
        case FETCH_CHAR_ERROR:
          return {
            ...state,
            charachertList: [],
            requesting: false,
            successful: false,
            requestCompleted:true,
            errors:action.error,
          }
          case SEARCH_CHAR:
            return {
              ...state,
              requesting: false,
              successful: true,
              requestCompleted:true,
              charachertList: [],
              errors:'',
            }
  
      default:
        return initialState
    }
  }
  
  export default   reducer
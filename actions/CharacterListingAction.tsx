import {
    FETCH_CHAR_REQUESTING,
    FETCH_CHAR_SUCCESS,
    FETCH_CHAR_ERROR,
    SEARCH_CHAR
  } from '../ConstantsList'
  
  // In order to perform an action of type LOGIN_REQUESTING
  // we need an email and password
  export const fectchCharacters = function fectchCharacters ( pageNumber:number ) {

    return {
      type: FETCH_CHAR_REQUESTING,
      pageNumber
    }
  }
  export const searchCharacters = function searchCharacters ( name:string ) {
    //alert('searchCharacters action='+name)
    return {
      type: SEARCH_CHAR,
      name
    }
  }

  
  

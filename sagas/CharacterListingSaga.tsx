

import { call, put, debounce, takeLatest } from 'redux-saga/effects'
import * as RootNavigation from '../config/RootNavigation'
import {fetchCharacters,searchCharacters} from '../Services/rickandmortyapi'
//import {storeUserSession} from '../config/UserSession'


import {
    FETCH_CHAR_REQUESTING,
    FETCH_CHAR_SUCCESS,
    FETCH_CHAR_ERROR,
    SEARCH_CHAR
  } from '../ConstantsList'



function* fetchCharactersApi (action:any) {
  const { pageNumber } = action 
  //alert("saga")
  //alert(pageNumber)
  let  {data,error,status}= yield call(fetchCharacters,pageNumber);
  if(status==200){
  yield put({ type: FETCH_CHAR_SUCCESS ,data,error,status})

 
  }
  else{
    yield put({ type: FETCH_CHAR_ERROR,error,status })

  }
  
  }

  function* searchCharactersApi (action:any) {
    const { name } = action 
   // alert('searchCharacters saga') 
   // alert(name)
   console.log('calling searchCharacters')
    let  {data,error,status}= yield call(searchCharacters,name);
    //alert('from saga ---'+JSON.stringify(data))
    if(status==200){
    yield put({ type: FETCH_CHAR_SUCCESS ,data,error,status})
  
   
    }
    else{
      
      yield put({ type: FETCH_CHAR_ERROR,error,status })
  
    }
    
    }


function* watchCharacterSaga() {
  yield takeLatest(FETCH_CHAR_REQUESTING, fetchCharactersApi);
 // yield takeLatest(SEARCH_CHAR, searchCharactersApi);
  yield debounce(2000, SEARCH_CHAR, searchCharactersApi)
}
export default watchCharacterSaga

import { combineReducers } from 'redux'
import LoginReducer from '../reducer/LoginReducer';
import ClientReducer from '../reducer/ClientReducer';
import CharacterListingReducer from '../reducer/CharacterListingReducer';

const CombineReducer = combineReducers({
    LoginReducer,
    ClientReducer,
    CharacterListingReducer

})

export default CombineReducer
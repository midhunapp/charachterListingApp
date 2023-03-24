import React ,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import SearchCharacterScreen from '../screens/SearchCharacterScreen';
import {searchCharacters} from '../actions/CharacterListingAction';
import PropTypes from 'prop-types'


const SearchCharcterContainer=(props:any)=>{

    const {
        searchCharacters,
        charachertList,
        successful,
        errors,
        requesting,
        requestCompleted
    }= props
  
    const [searchString, setsearchString] = useState('')


   const handleCharacterSearch=(name:string)=>{
        setsearchString(name)
        searchCharacters(name);
    }

    return <SearchCharacterScreen {...props}   handleCharacterSearch={handleCharacterSearch} />;
}
// Grab only the piece of state we need
const mapStateToProps=(state:any)=>{
 
    //alert(JSON.stringify(state))
    return {
        charachertList: state.CharacterListingReducer.charachertList,
        successful: state.CharacterListingReducer.successful,
        errors: state.CharacterListingReducer.errors,
        requesting: state.CharacterListingReducer.requesting,
        requestCompleted: state.CharacterListingReducer.requestCompleted,
      }
}


SearchCharcterContainer.proptypes ={
    fectchCharacters:PropTypes.func,
    charachertList:PropTypes.array,
    requesting:PropTypes.bool,
    successful:PropTypes.bool,
    requestCompleted:PropTypes.bool,
    errors:PropTypes.string
    
}
const mapDispatch={
    searchCharacters
}
//const LoginContainer = connect(mapStateToProps,mapDispatch) (LoginContainer);
export default connect(mapStateToProps,mapDispatch)(SearchCharcterContainer)
//export default LoginContainer

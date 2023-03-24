import React ,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import ListingScreen from '../screens/ListingScreen';
import {fectchCharacters,searchCharacters} from '../actions/CharacterListingAction';
import PropTypes from 'prop-types'



const CharcterListingContainer=(props:any)=>{

    const {
        fectchCharacters,
        searchCharacters,
        charachertList,
        successful,
        errors,
        requesting,
        requestCompleted
    }= props
  
    const [pageCurrent, setpageCurrent] = useState(1)
    

   const handleCharacterSearch=(name:string)=>{
     //alert('name='+ name)
       
        searchCharacters(name);
    }

  useEffect(() => {
    fectchCharacters(pageCurrent);
  }, [pageCurrent]); 
   const goBack=()=>{
       if (pageCurrent>1)
      setpageCurrent(pageCurrent-1)
      fectchCharacters(pageCurrent);
    }
    const goNext=()=>{
       setpageCurrent(pageCurrent+1)
       fectchCharacters(pageCurrent);
     }
    return <ListingScreen {...props}  goBack={goBack} goNext={goNext}  handleCharacterSearch={handleCharacterSearch}/>;
}
// Grab only the piece of state we need
const mapStateToProps=(state:any)=>{
 
   // alert(JSON.stringify(state))
    return {
        charachertList: state.CharacterListingReducer.charachertList,
        successful: state.CharacterListingReducer.successful,
        errors: state.CharacterListingReducer.errors,
        requesting: state.CharacterListingReducer.requesting,
        requestCompleted: state.CharacterListingReducer.requestCompleted,
      }
}


CharcterListingContainer.proptypes ={
    fectchCharacters:PropTypes.func,
    searchCharacters:PropTypes.func,
    charachertList:PropTypes.array,
    requesting:PropTypes.bool,
    successful:PropTypes.bool,
    requestCompleted:PropTypes.bool,
    errors:PropTypes.string
    
}
const mapDispatch={
  
    fectchCharacters,
    searchCharacters
}
//const LoginContainer = connect(mapStateToProps,mapDispatch) (LoginContainer);
export default connect(mapStateToProps,mapDispatch)(CharcterListingContainer)
//export default LoginContainer

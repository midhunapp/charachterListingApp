import React ,{useEffect} from 'react';
import {connect} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import {loginRequest} from '../actions/LoginActions';
import PropTypes from 'prop-types'

const LoginContainer=(props:any)=>{
    const {
        loginRequest,
        requesting,
        successful,
        loginStatus
    }= props
   //alert(JSON.stringify(props))
   //alert(JSON.stringify(loginRequest))
    const performLogin=(email:any,password:any)=>{
        
        loginRequest(email,password);
    }
    return <LoginScreen {...props} callback={performLogin} />;
}
// Grab only the piece of state we need
const mapStateToProps=(state:any)=>{
 
    //alert(state.LoginReducer.requesting)
    return {
        requesting: state.LoginReducer.requesting,
        successful: state.LoginReducer.successful,
        loginStatus: state.LoginReducer.loginStatus,
       // errors: [],
      }
}


LoginContainer.proptypes ={
    loginRequest:PropTypes.func,
    requesting:PropTypes.bool,
    successful:PropTypes.bool,
    loginStatus:PropTypes.string
}
const mapDispatch={
    loginRequest
}
//const LoginContainer = connect(mapStateToProps,mapDispatch) (LoginContainer);
export default connect(mapStateToProps,mapDispatch)(LoginContainer)
//export default LoginContainer

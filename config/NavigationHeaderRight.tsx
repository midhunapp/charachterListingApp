import { TouchableOpacity, View ,Text} from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {logoutRequest} from '../actions/LoginActions';
import {connect} from 'react-redux';
const HeaderRight=(props:any) =>{
  const {
    logoutRequest,
    username
}= props

    const logout=()=>{
      //alert(logoutRequest)
      
      logoutRequest();
    }
    return (
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:2,paddingRight:20}}>{username}</Text>
        <TouchableOpacity onPress={logout} style={{flex:1,paddingRight:20}}>
        <Icon name="logout" size={20} color="#900" />
        </TouchableOpacity>
      </View>
    );
  }
  HeaderRight.proptypes ={
    logoutRequest:PropTypes.func,
    username:PropTypes.string
  }
  const mapStateToProps=(state:any)=>{
    //alert(JSON.stringify(state.ClientReducer.username))
     return {
      username: state.ClientReducer.username,

       }
 }
  const mapDispatch={
    logoutRequest
   }
   
export default connect(mapStateToProps,mapDispatch)(HeaderRight)
import { CLIENT_SET, CLIENT_UNSET } from '../ConstantsList'

const initialSate = {
  id: null,
  token: null,
  username:null
}

const reducer = function clientReducer (state = initialSate, action:any) {
  switch (action.type) {
    case CLIENT_SET:
      //alert('cleint setting'+JSON.stringify(action))
      return {
        id: action.userid,
        token: action.token,
        username:action.username
      }

    case CLIENT_UNSET:
      return {
        id: null,
        token: null,
        username:null
      }

    default:
      return state
  }
}

export default reducer
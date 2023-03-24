import { CLIENT_SET, CLIENT_UNSET } from '../ConstantsList'


export function setClient (token:string,userid:string,username:string) {
  return {
    type: CLIENT_SET,
    token,
    userid,
    username
  }
}

export function unsetClient () {
  return {
    type: CLIENT_UNSET,
  }
}
import { AsyncStorage } from 'react-native'

let initialState = {
    isLoading: false,
    isFullfilled: false,
    isRejected: false,
    userList: []
  }
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER_PENDING':
        return {
          ...state,
          isLoading: true,
          isFullfilled: false,
          isRejected: false
        }
      case 'GET_USER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          isFullfilled: false
        }
      case 'GET_USER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isRejected: false,
          isFullfilled: true,
          userList: action.payload.data
        }
      case 'GET_BY_EMAIL_PENDING':
        return {
          ...state,
          isLoading: true,
          isFullfilled: false,
          isRejected: false
        }
      case 'GET_BY_EMAIL_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          isFullfilled: false
        }
      case 'GET_BY_EMAIL_FULFILLED':
        // if (typeof action.payload.data === 'object') {
        //   for (let a = 0; a < Object.keys(action.payload.data).length; a++) {
        //     AsyncStorage.setItem(Object.keys(action.payload.data)[a], String(Object.values(action.payload.data)[a]))
        //   }
        // }
        AsyncStorage.setItem('username',action.payload.data.result.username)
        AsyncStorage.setItem('token',action.payload.data.result.token)
        return {
          ...state,
          isLoading: false,
          isRejected: false,
          isFullfilled: true,
          userList: action.payload.data
        }
      case 'REGISTER_PENDING':
        return {
          ...state,
          isLoading: true,
          isFullfilled: false,
          isRejected: false
        }
      case 'REGISTER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          isFullfilled: false
        }
      case 'REGISTER_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isRejected: false,
          isFullfilled: true,
          userList: action.payload.data
        }
        case 'LOGOUT_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'LOGOUT_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'LOGOUT_USER_FULFILLED':
            AsyncStorage.clear()
            return {
                ...state,
                isLoading: false,
                isFulFilled: true,
                userList: action.payload.data.result
            }
      case 'GET_TOKEN_PENDING':
        return {
          ...state,
          isLoading: true,
          isFullfilled: false,
          isRejected: false
        }
      case 'GET_TOKEN_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          isFullfilled: false
        }
      case 'GET_TOKEN_FULFILLED':
        if (action.payload.data === 'Unauthorization' || action.payload.data === 'Token Expired' || action.payload.data === 'Invalid Token') {
          localStorage.clear()
        }
        return {
          ...state,
          isLoading: false,
          isRejected: false,
          isFullfilled: true,
          userList: action.payload.data
        }
      default:
        return state
    }
  }
  
  export default user
  
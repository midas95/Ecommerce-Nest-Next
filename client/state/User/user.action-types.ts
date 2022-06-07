export enum ActionTypes {
  USER_LOGIN_START = 'USER_LOGIN_START',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',

  USER_REGISTER_START = 'USER_REGISTER_START',
  USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
  USER_REGISTER_ERROR = 'USER_REGISTER_ERROR',

  USER_UPDATE_START = 'USER_UPDATE_START',
  USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
  USER_UPDATE_ERROR = 'USER_UPDATE_ERROR',

  GET_CURRENT_USER_START = 'GET_CURRENT_USER_START',
  GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR',

  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

  FETCH_USER_START = 'FETCH_USER_START',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',

  DELETE_USER_START = 'DELETE_USER_START',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR = 'DELETE_USER_ERROR',

  USER_LOGOUT = 'USER_LOGOUT',
  CLEAN_USER_ERRORS = 'CLEAN_USER_ERRORS',
}

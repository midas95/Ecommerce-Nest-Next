export enum ActionTypes {
  CREATE_ORDER_START = 'CREATE_ORDER_START',
  CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR',

  FETCH_ORDER_START = 'FETCH_ORDER_START',
  FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS',
  FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR',

  FETCH_ORDERS_START = 'FETCH_ORDERS_START',
  FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR',

  FETCH_USER_ORDERS_START = 'FETCH_USER_ORDERS_START',
  FETCH_USER_ORDERS_SUCCESS = 'FETCH_USER_ORDERS_SUCCESS',
  FETCH_USER_ORDERS_ERROR = 'FETCH_USER_ORDERS_ERROR',

  PAY_ORDER_START = 'PAY_ORDER_START',
  PAY_ORDER_SUCCESS = 'PAY_ORDER_SUCCESS',
  PAY_ORDER_ERROR = 'PAY_ORDER_ERROR',

  DELIVER_ORDER_START = 'DELIVER_ORDER_START',
  DELIVER_ORDER_SUCCESS = 'DELIVER_ORDER_SUCCESS',
  DELIVER_ORDER_ERROR = 'DELIVER_ORDER_ERROR',
}

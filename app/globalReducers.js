import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import reducerRegistry from 'app/utils/reducerRegistry';

// Reducer Name
const reducerName = 'global';

// Declare Some Variable Here
let someVariable = 'Hello World';

// Intial State
const initialState = fromJS({
  location: null,
  data: 'ping'
})

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case PONG:
      return state.set('data', 'pong');
    case LOCATION_CHANGE: 
      return state.merge({
        location: action.payload
      })
    default:
      return state;
  }
}

// Register Reducer
export const registeringReducer = () => {
  reducerRegistry.register(reducerName, reducer);
}

registeringReducer();

const createActionName = (actionName) => `app/${reducerName}/${actionName}`

// Selectors

// Actions
export const DO_SOMETHING = createActionName('DO_SOMETHING');
export const PING = createActionName('PING');
export const PONG = createActionName('PONG');

// Actions Creator
export const doSomething = () => ({ type: DO_SOMETHING });


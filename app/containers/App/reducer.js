import { Map, List } from 'immutable'; 
import reducerRegistry from 'app/utils/reducerRegistry';

// Reducer Name
const reducerName = 'app';

// Declare Some Variable Here
let someVariable = 'Hello World';

// Initialize Initial State
const initialState = new Map();

// Function to generate action name
const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

// Reducer
export default function reducer(state=initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

// Register Reducer
export const registeringReducer = () => {
  reducerRegistry.register(reducerName, reducer);
}

// Selectors

const 

// Actions
export const DO_SOMETHING = createActionName('DO_SOMETHING');

// Actions Creator
export const doSomething = () => ({ type: DO_SOMETHING });

import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import globalReducers from 'app/globalReducers';
import rootEpic from 'app/rootEpic';
import reducerRegistry from 'app/utils/reducerRegistry';



const combine = (reducers, initialState) => {
  const reducerNames = reducers.keySeq();
  initialState.keySeq().forEach(item => {
    if(!reducerNames.includes(item)) {
      reducers.set(item, (state = null) => state);
    }
  })
  return combineReducers(reducers.toJS());
}

export default function configStore(initialState, history) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [
    routerMiddleware(history),
    epicMiddleware
  ];


  const reducers = combine(reducerRegistry.getReducers(), initialState);
  const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

  epicMiddleware.run(rootEpic);

  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducer(reducers));
  });
  
  return store;
}

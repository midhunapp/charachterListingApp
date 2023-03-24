import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import combineReducer from '../reducer/CombineReducer';
import combineSagas from '../sagas/CombineSaga';
//import LoginContainer from '../Container/LoginContainer';
//import LoginReducer from '../reducer/LoginReducer';
//import loginWatcher from '../sagas/LoginSagas'
import Router from '../config/Router'
import configureStore from '../store/ConfigureStore'; 
  export  const Root=()=>{
 
  /*  const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducer,
        compose(applyMiddleware(sagaMiddleware)));
        sagaMiddleware.run(combineSagas) */

    return <Provider store={configureStore()}>
           <Router/>
           </Provider>;
  }  
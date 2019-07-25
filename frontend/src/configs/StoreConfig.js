import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { autoRehydrate } from "redux-persist-immutable";
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import reducer from "../modules";
import rootSaga from "../sagas";


const sagaMiddleware = createSagaMiddleware();

const history = createHistory()
const routerMiddleWare = routerMiddleware(history)
const middleware = [logger, routerMiddleWare, sagaMiddleware]

export default function configureStore(onCompletion): any {
  const enhancer = compose(
    applyMiddleware(...middleware),
    // autoRehydrate()
  );

  const store = createStore(reducer, enhancer);
  store.runSaga = sagaMiddleware.run;
  sagaMiddleware.run(rootSaga);
 
  return store;
}
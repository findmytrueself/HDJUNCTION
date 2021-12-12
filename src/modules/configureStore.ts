import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '.';
// const middlewares = [thunk];
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run();
export default function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, SetupEpicCombines } from './mainMiddlewares';
const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware();
let store = null;
store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, epicMiddleware, loggerMiddleware)
  )
);
epicMiddleware.run(SetupEpicCombines);

export default store

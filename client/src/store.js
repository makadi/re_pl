import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';


const history = createHistory();

const reducers = combineReducers({
  dashboard: dashboardReducer
});

const middleWare = applyMiddleware(thunk, routerMiddleware(history));

const store = createStore(reducers, middleWare);

export { history };
export default store;


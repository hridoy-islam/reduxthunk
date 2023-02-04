import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import postReducer from './reducers/postReducer'
import thunk from 'redux-thunk';

const store = createStore(
    postReducer, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; 
import thunk from 'redux-thunk';
import rootReucer from './reducers/rootReducer';

const store = createStore(
    rootReucer, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;
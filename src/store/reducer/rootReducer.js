import { combineReducers } from 'redux';
import GlobalReducer from './reducer';


export default combineReducers({
    DMIReducer: GlobalReducer
})
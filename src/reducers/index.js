import counterReducer from './counter';
import isLoggerReducer from './isLogged';

import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    counter : counterReducer,
    isLogged : isLoggerReducer
})

export default rootReducers;
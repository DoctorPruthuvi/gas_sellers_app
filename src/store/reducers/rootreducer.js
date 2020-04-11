import authReducer from './authreducer'
import projectReducer from './projectreducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer

// the key name will be the data property on the state object 
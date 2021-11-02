import {combineReducers} from 'redux'
import auth from './auth'
import company from './company'
import users from './users'

export default combineReducers({auth,company,users})
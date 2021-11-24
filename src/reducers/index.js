import {combineReducers} from 'redux'
import auth from './auth'
import company from './company'
import users from './users'
import transactions from './transactions'

export default combineReducers({auth,company,users,transactions})
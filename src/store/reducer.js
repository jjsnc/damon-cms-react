import { combineReducers } from 'redux-immutable'

import {reducer as homeReducer } from '../pages/home/store/'
import {reducer as loginReducer } from '../pages/login/store/'

export  default combineReducers({
	home:homeReducer,
	login:loginReducer
})
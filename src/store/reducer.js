import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false
});
const changeLoginData = (state, action) => {
	return state.merge({
		username: fromJS(action.username),
		Token: fromJS(action.Token),
	});
};

export  default combineReducers(
	{
		AITIME:(state = defaultState, action) => {
			switch(action.type) {
				case constants.LOGIN:
					return changeLoginData(state, action);
				default:
					return state;
			}
		}
	}
)


import * as constants from './constants';

const defaultState = {
	login: false,
	username:'',
	Token:''
};
const changeLoginData = (state, action) => {
	return {
		...state,
		username: action.username,
		Token: action.Token,
	};
};

export  default (state = defaultState, action) => {
		switch(action.type) {
			case constants.LOGIN:
				return changeLoginData(state, action);
			default:
				return state;
		}
	}



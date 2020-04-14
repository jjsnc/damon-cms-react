import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	username: '',
	Token : ''
});

const changeLoginData = (state, action) => {
	return state.merge({
		username: fromJS(action.username),
		Token: fromJS(action.Token),
	});
};


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.LOGIN:
			return changeLoginData(state, action);
		default:
			return state;
	}
}
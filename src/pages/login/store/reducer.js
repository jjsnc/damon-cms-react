import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: []
});

const changeLoginData = (state, action) => {
	return state.merge({
		login: fromJS(action.topicList),
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
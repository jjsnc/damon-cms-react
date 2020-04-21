
import {post} from '../damon/plugin/axios';
import * as constants from './constants';
// import { fromJS } from 'immutable';
const getUserData = (result) => ({
	type: constants.LOGIN,
	username: result.UserName,
	Token : result.Token
});



export const getUserInfo = (params) => {
	return (dispatch) => {
		  post('cms/user/login',params).then((res) => {
			const result = res;
			dispatch(getUserData(result));
		});
	}
}

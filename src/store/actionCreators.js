
import {post} from '../damon/plugins/axios';
import * as constants from './constants';
// import { fromJS } from 'immutable';
const getUserData = (result) => ({
	type: constants.LOGIN,
	username: result.UserName,
	Token : result.Token
});



export const getUserInfo = (params) => {
	return (dispatch) => {
		// axios.post('/api/Intelligence/GetToken',params).then((res) => {
		// 	const result = res.data;
		// 	console.log(result)
		// 	dispatch(getUserData(result));
		// });
		  post('/api/Intelligence/GetToken',params).then((res) => {
			const result = res;
			dispatch(getUserData(result));
		});
	}
}

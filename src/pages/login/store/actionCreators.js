
import axios from '../../../axios/index';
// import * as constants from './constants';
// import { fromJS } from 'immutable';

// const getUserData = (result) => ({
// 	type: constants.LOGIN,
// 	login: result.topicList,
// 	list : fromJS(result.list)
// });



export const getUserInfo = (params) => {
	return (dispatch) => {
		axios.post('/api/Intelligence/GetToken',params).then((res) => {
			const result = res.data.data;
			console.log(result)
			// dispatch(getUserData(result));
		});
	}
}

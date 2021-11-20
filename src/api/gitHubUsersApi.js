import axiosApi from './axiosApi';

const gitHubUsersApi = {
	getUser(userName) {
		const url = `users/${userName}`;
		return axiosApi.get(url);
	},
};

export default gitHubUsersApi;

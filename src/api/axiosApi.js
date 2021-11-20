import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		'Content-Type': 'application/json',
	},
});
export default axiosApi;

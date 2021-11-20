import { useEffect, useState } from 'react';
import gitHubUsersApi from '../../../api/gitHubUsersApi';

export default function useUserSearch(users) {
	const [dataUser, setDataUser] = useState([]);
	const [notFault, setNotFault] = useState('');
	useEffect(() => {
		users &&
			(async () => {
				try {
					const result = await gitHubUsersApi.getUser(users);
					setDataUser(result);
				} catch (error) {
					error.message && setNotFault('No results');
				}
			})();
	}, [users]);

	useEffect(() => {
		dataUser && setNotFault('');
	}, [dataUser]);

	return {
		dataUser,
		notFault,
	};
}

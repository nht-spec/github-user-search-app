import React, { useState } from 'react';
import SearchUser from './components/SearchUser/SearchUser';
import moon from '../../icons/moon.svg';
import sun from '../../icons/sun.svg';
import '../../index.scss';
import './style.scss';
import useUserSearch from './hooks/useUserSearch';
import InfoUser from './components/InfoUser/InfoUser';

function GitHubSearchFeature(props) {
	const [darkMode, setDarkMode] = useState(false);
	const [valueSearch, setValueSearch] = useState('');
	const { dataUser, notFault } = useUserSearch(valueSearch);

	return (
		<div className='git-hub-search' data-theme={darkMode ? 'dark' : 'light'}>
			<div className='git-hub-search-control f-family'>
				<div className='d-flex j-content'>
					<h2 className='title-app f-size-26'>devfinder</h2>
					<h2
						onClick={() => setDarkMode(!darkMode)}
						className='d-flex dark-mode'
					>
						{darkMode ? 'LIGHT' : 'DARK'}
						{darkMode ? <img src={sun} alt='' /> : <img src={moon} alt='' />}
					</h2>
				</div>
				<SearchUser notFault={notFault} handlesubmit={setValueSearch} />
				<InfoUser dataUser={dataUser} />
			</div>
		</div>
	);
}

export default GitHubSearchFeature;

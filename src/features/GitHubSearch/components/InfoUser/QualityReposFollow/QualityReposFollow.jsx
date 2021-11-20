import React from 'react';
import './style.scss';

function QualityReposFollow({ publicrepos, followers, following }) {
	return (
		<div className='quality-control d-flex al-item j-content'>
			<p className='d-flex quality-text'>
				<p className='text'>Repos</p>
				{publicrepos !== undefined ? publicrepos : '8'}
			</p>

			<p className='d-flex quality-text'>
				<p className='text'>Followers</p>
				{followers !== undefined ? followers : '4000'}
			</p>

			<p className='d-flex quality-text'>
				<p className='text'>Following</p>
				{following !== undefined ? following : '23'}
			</p>
		</div>
	);
}

export default QualityReposFollow;

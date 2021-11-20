import React from 'react';
import DateJoined from './DateJoined/DateJoined';
import Info from './Info/Info';
import QualityReposFollow from './QualityReposFollow/QualityReposFollow';
import Thumbnail from './Thumbnail/Thumbnail';
import './style.scss';

function InfoUser({ dataUser }) {
	const user = dataUser.data;

	return (
		<div className='info-user d-flex'>
			<Thumbnail thumbnail={user?.avatar_url} />
			<div className='info-user-list'>
				<div className='mobile-control'>
					<div className='mobile-flex d-flex j-content al-item'>
						<p className='user-name-text'>
							{user?.name ? user?.name : 'The Octocat'}
						</p>
						<DateJoined date={user?.created_at} />
					</div>

					<p className='login-name-text'>
						@{user?.login ? user?.login : 'octocat'}
					</p>
				</div>

				<p className='bio-text'>
					{user?.bio ? user?.bio : 'This profile has no bio'}
				</p>
				<QualityReposFollow
					followers={user?.followers}
					following={user?.following}
					publicrepos={user?.public_repos}
				/>

				<Info
					twittertitle={user?.twitter_username}
					locationtitle={user?.location}
					linkgithub={user?.html_url}
					companytitle={user?.company}
				/>
			</div>
		</div>
	);
}

export default InfoUser;

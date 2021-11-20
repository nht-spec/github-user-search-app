import React from 'react';
import location from '../../../../../icons/location.svg';
import website from '../../../../../icons/website.svg';
import twitter from '../../../../../icons/twitter.svg';
import company from '../../../../../icons/company.svg';
import './style.scss';

function Info({ companytitle, twittertitle, locationtitle, linkgithub }) {
	return (
		<div className='d-flex info-control'>
			<div className='d-flex al-item mg-bottom mg-bottom-mobile'>
				<div className='image'>
					<img src={location} alt='' />
				</div>
				<p className={locationtitle ? 'c-avail text' : 'c-not-avail text'}>
					{locationtitle ? locationtitle : 'Not Available '}
				</p>
			</div>

			<div className='d-flex al-item mg-bottom mg-bottom-mobile'>
				<div className='image'>
					<img src={twitter} alt='' />
				</div>
				<p className={twittertitle ? 'c-avail text' : 'c-not-avail text'}>
					{twittertitle ? twittertitle : 'Not Available '}
				</p>
			</div>
			<div className='d-flex al-item mg-bottom-mobile'>
				<div className='image'>
					<img src={website} alt='' />
				</div>
				<p className={linkgithub ? 'c-avail text' : 'c-not-avail text'}>
					{linkgithub ? (
						<a className='link-git' href={linkgithub}>
							{linkgithub}
						</a>
					) : (
						'Not Available'
					)}
				</p>
			</div>
			<div className='d-flex al-item mg-bottom-mobile'>
				<div className='image'>
					<img src={company} alt='' />
				</div>
				<p className={companytitle ? 'c-avail text' : 'c-not-avail text'}>
					{companytitle ? companytitle : 'Not Available'}
				</p>
			</div>
		</div>
	);
}

export default Info;

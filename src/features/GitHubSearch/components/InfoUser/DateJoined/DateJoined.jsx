import React, { useEffect, useState } from 'react';
import './style.scss';

function DateJoined({ date }) {
	const [timeJoin, setTimeJoin] = useState('');

	useEffect(() => {
		const time = new Date(date);
		const month = time
			.toLocaleDateString('en-US', { month: 'long' })
			.slice(0, 3);
		const day = time.getDate();
		const year = time.getFullYear();
		setTimeJoin(`${day} ${month} ${year}`);
	}, [date]);
	return (
		<div className='date-control'>
			Joined {date === undefined ? '25 Jan 2011' : timeJoin}
		</div>
	);
}

export default DateJoined;

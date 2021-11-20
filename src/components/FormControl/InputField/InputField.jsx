import React from 'react';
import './style.scss';

function InputField({ handlechange }) {
	const handleChange = (value) => {
		handlechange && handlechange(value);
	};

	return (
		<input
			onChange={(e) => handleChange(e.target.value)}
			className='f-family input-filed'
			type='text'
			placeholder='Search'
		/>
	);
}

export default InputField;

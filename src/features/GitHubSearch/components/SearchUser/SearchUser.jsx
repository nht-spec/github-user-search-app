import React, { useState } from 'react';
import InputField from '../../../../components/FormControl/InputField/InputField';
import './style.scss';
import search from '../../../../icons/search.svg';

function SearchUser({ handlesubmit, notFault }) {
	const [valueInput, setValueInput] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		handlesubmit && handlesubmit(valueInput);
	};

	return (
		<form className='d-flex search-control j-content' onSubmit={handleSubmit}>
			<img src={search} alt='' />
			<InputField handlechange={setValueInput} />
			{notFault && <p className='not-fault'>{notFault}</p>}
			<button className='btn-search f-family' type='submit'>
				Search
			</button>
		</form>
	);
}

export default SearchUser;

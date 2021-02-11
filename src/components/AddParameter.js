import React from 'react';
import { HTMLSelect, Icon, Classes } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './AddParameter.css';

const AddParameter = ({ inputtype, addParam }) => {
	const addInput = e => {
		const nameInput = document.querySelector('#' + inputtype + 'name');
		const name = nameInput.value;
		if (name) {
			nameInput.value = '';
			const type = document.querySelector('#' + inputtype + 'type').value;
			addParam(inputtype, { name, type });
		}
	};
	const typeOptions = [
		{ label: 'image', value: 'image' },
		{ label: 'text', value: 'text' },
		{ label: 'audio', value: 'audio' },
		{ label: 'video', value: 'video' },
		{ label: 'time series', value: 'time series' }
	];
	return (
		<div className='addField'>
			<input
				type='text'
				className={Classes.INPUT}
				name='inputs'
				placeholder='Input name'
				id={inputtype + 'name'}
			/>
			<HTMLSelect
				options={typeOptions}
				className='typeInput'
				id={inputtype + 'type'}
				minimal
			/>
			<Icon icon={IconNames.ADD} onClick={addInput} className='plusButton' />
		</div>
	);
};

export default AddParameter;

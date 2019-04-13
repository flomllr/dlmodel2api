import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { TextArea, Button, Icon, FileInput, Classes } from '@blueprintjs/core';
import AddParameter from '../components/AddParameter';
import { IconNames } from '@blueprintjs/icons';
import './Upload.css';

class Upload extends Component {
	state = {
		inputs: [{ name: 'image', type: 'url' }],
		outputs: [{ name: 'labels', type: 'string' }],
		description: '',
		fileSelected: 'Select model',
		hasSelection: undefined
	};

	changeDescription = e => {
		console.log(e.target.value);
		this.setState({ description: e.target.value });
	};

	addParam = (type, element) => {
		const newState = Object.assign({}, this.state);
		const newArray = newState[type];
		newArray.push(element);
		newState[type] = newArray;
		this.setState(newState);
	};

	removeParam = (type, index) => {
		const newState = Object.assign({}, this.state);
		const newArray = newState[type];
		newArray.splice(index, 1);
		newState[type] = newArray;
		this.setState(newState);
	};

	uploadFile = e => {
		const fileSelected = e.target.files[0].name;
		this.setState({ fileSelected, hasSelection: true });
	};

	render() {
		const {
			inputs,
			outputs,
			description,
			fileSelected,
			hasSelection
		} = this.state;
		return (
			<div className='upload'>
				<h2>Upload a new model</h2>
				<FileInput
					text={fileSelected}
					onInputChange={this.uploadFile}
					hasSelection={hasSelection}
					className='uploadBtn'
				/>
				<h3>Define inputs and outputs</h3>
				<p>Inputs</p>
				{inputs.map((e, id) => (
					<div key={id}>
						<p className='paramDesc'>
							{e.name}: {e.type}
						</p>
						<Icon
							icon={IconNames.PLUS}
							onClick={() => this.removeParam('inputs', id)}
							className='removeIcon'
						/>
					</div>
				))}
				<AddParameter inputtype='inputs' addParam={this.addParam} />

				<p>Outputs</p>
				{outputs.map((e, id) => (
					<div key={id}>
						<p className='paramDesc'>
							{e.name}: {e.type}
						</p>
						<Icon
							icon={IconNames.PLUS}
							onClick={() => this.removeParam('outputs', id)}
							className='removeIcon'
						/>
					</div>
				))}
				<AddParameter inputtype='outputs' addParam={this.addParam} />

				<h3>Give a short description</h3>
				<p>Name</p>
				<input
					type='text'
					className={Classes.INPUT}
					name='inputs'
					placeholder='Choose a name (optional)'
				/>
				<p>Description</p>
				<TextArea
					fill
					onChange={this.changeDescription}
					value={description}
					placeholder='Insert a description of your model'
				/>
				<p>Preview</p>
				<ReactMarkdown source={description} />
				<Button>Deploy</Button>
			</div>
		);
	}
}

export default Upload;

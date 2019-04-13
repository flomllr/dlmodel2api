import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {
	TextArea,
	Button,
	Icon,
	FileInput,
	Classes,
	Intent,
	Slider
} from '@blueprintjs/core';
import AddParameter from '../components/AddParameter';
import { IconNames } from '@blueprintjs/icons';
import './Upload.css';

class Upload extends Component {
	state = {
		inputs: [{ name: 'image', type: 'url' }],
		outputs: [{ name: 'labels', type: 'string' }],
		description: '',
		fileSelected: 'Select model',
		hasSelection: undefined,
		price: 1
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

	changePrice = value => {
		this.setState({ price: value });
	};

	render() {
		const {
			inputs,
			outputs,
			description,
			fileSelected,
			hasSelection,
			price
		} = this.state;
		return (
			<div className='upload'>
				<h2>Upload a new model</h2>
				<FileInput
					text={fileSelected}
					onInputChange={this.uploadFile}
					hasSelection={hasSelection}
					className='uploadBtn'
					fill
				/>
				<h3>Define inputs and outputs</h3>
				<div className='inputGrid margin30'>
					<p>Inputs</p>
					<div>
						{'{'}
						<div class='tab'>
							{inputs.map((e, id) => (
								<div key={id}>
									<p className='paramDesc'>
										<span className='code'>
											<span className='slightBold'>{e.name}</span>: {e.type}
										</span>
									</p>
									<Icon
										icon={IconNames.PLUS}
										onClick={() => this.removeParam('inputs', id)}
										className='removeIcon'
										intent={Intent.DANGER}
									/>
								</div>
							))}
							<AddParameter inputtype='inputs' addParam={this.addParam} />
						</div>
						{'}'}
					</div>
				</div>

				<div className='inputGrid margin30'>
					<p>Outputs</p>
					<div>
						{'{'}
						<div class='tab'>
							{outputs.map((e, id) => (
								<div key={id}>
									<p className='paramDesc'>
										<span className='code'>
											<span className='slightBold'>{e.name}</span>: {e.type}
										</span>
									</p>
									<Icon
										icon={IconNames.PLUS}
										onClick={() => this.removeParam('outputs', id)}
										className='removeIcon'
										intent={Intent.DANGER}
									/>
								</div>
							))}
							<AddParameter inputtype='outputs' addParam={this.addParam} />
						</div>
						{'}'}
					</div>
				</div>

				<div className='priceSelect'>
					<h3>Price per 1000 API requests</h3>
					<Slider
						fill
						min={0.1}
						max={5.1}
						stepSize={0.01}
						labelStepSize={1}
						value={price}
						onChange={this.changePrice}
					/>
				</div>

				<h3>Give a short description</h3>
				<div className='inputGrid margin10'>
					<p>Name</p>
					<input
						type='text'
						className={Classes.INPUT}
						name='inputs'
						placeholder='Choose a name (optional)'
					/>
				</div>
				<div className='inputGrid margin10'>
					<p>Abstract</p>
					<TextArea fill placeholder='Insert a brief abstract of your model' />
				</div>
				<div className='inputGrid margin10'>
					<p>Description</p>
					<TextArea
						fill
						onChange={this.changeDescription}
						value={description}
						placeholder='Insert a description of your model. (You may use markdown.)'
					/>
				</div>

				<h3>Preview</h3>
				<ReactMarkdown
					className='markdownPreview margin30'
					source={description}
				/>
				<a href='/overview'>
					<Button fill minimal className='deployButton'>
						Deploy
					</Button>
				</a>
			</div>
		);
	}
}

export default Upload;

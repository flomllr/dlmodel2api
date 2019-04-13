import React, { Component } from 'react';
import markdown from '../assets/desc.md';
import {
	Button,
	Classes,
	Dialog,
	H4,
	Intent,
	FileInput,
	Spinner
} from '@blueprintjs/core';
import './Overview.css';
import img from '../assets/usage.png';
import Voting from '../components/Voting';
import ReactMarkdown from 'react-markdown';

class PreTest extends Component {
	render() {
		const { testButton, modelName } = this.props;

		return (
			<div>
				<div className={Classes.DIALOG_BODY}>
					<H4>
						<div style={{ margin: '0 auto 20px auto' }}>{modelName}</div>
					</H4>
					<p>Inputs:</p>

					<FileInput
						text='Upload picture'
						onInputChange={this.uploadFile}
						hasSelection='undefined'
						className='uploadBtn'
						style={{ margin: '10px auto 50px auto' }}
						fill
					/>
					<p>Expected outputs:</p>
				</div>
				<div className='bp3-dialog-footer'>
					<Button
						intent={Intent.SUCCESS}
						className='testButton bp3-large'
						onClick={testButton}
					>
						Perform test
					</Button>
				</div>
			</div>
		);
	}
}

class Overview extends Component {
	state = {
		modelName: 'Facial-Expression-Recognition',
		url: 'https://api.deeplify.ai/Facial-Expression-Recognition/v1',
		abstract: `A CNN based pytorch implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset`,
		inputs: [{ name: 'image', type: 'image' }],
		outputs: [{ name: 'labels', type: 'string' }],
		description: '',
		autoFocus: true,
		canEscapeKeyClose: true,
		canOutsideClickClose: true,
		enforceFocus: true,
		isOpen: false,
		usePortal: true,
		testStage: 0
	};
	componentDidMount = () => {
		fetch(markdown)
			.then(response => {
				return response.text();
			})
			.then(text => {
				this.setState({
					description: text
				});
			});
	};
	render() {
		const {
			modelName,
			description,
			inputs,
			outputs,
			url,
			abstract
		} = this.state;

		let dialogContent;
		if (this.state.testStage === 0) {
			dialogContent = (
				<PreTest testButton={this.testButton} modelName={modelName} />
			);
		} else if (this.state.testStage === 1) {
			dialogContent = (
				<Spinner className='testSpinner' intent='none' size='70' />
			);
			setTimeout(() => {
				if (this.state.testStage === 1) {
					this.setState({ testStage: 2 });
				}
			}, 1000);
		} else if (this.state.testStage === 2) {
			dialogContent = <p>Results</p>;
		}

		return (
			<div className='overview'>
				<h2>{modelName}</h2>
				<h3>API Endpoint</h3>
				<p className='APIendpoint'>{url}</p>
				<div className='overviewGrid'>
					<div className='main'>
						<h3>Abstract</h3>
						<p>{abstract}</p>
						<h3>Inputs and outputs</h3>
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
										</div>
									))}
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
										</div>
									))}
								</div>
								{'}'}
							</div>
						</div>
					</div>
					<div className='right'>
						<Button className='deployButton' onClick={this.handleOpen} minimal>
							Test the API
						</Button>
						<div className='bg-lightgrey'>
							<h3>Upvotes</h3>
							<Voting />
							<h3>Calls per week</h3>
							<div className='grid'>
								<h4 className='inline'>5,123</h4>
								<img src={img} alt='usage' />
							</div>
							<h3>Pricing</h3>
							<h4 className='margin10top'>$1 / 1000 calls</h4>
							<h3>Creator</h3>
							<p>
								Jan Mittendorf
								<br />
								<a
									href='https://google.com'
									rel='noopener noreferrer'
									target='_blank'
								>
									mittendorf.com
								</a>
							</p>
						</div>
					</div>
				</div>
				<h3>Description</h3>
				<div className='bg-lightgrey posRelative'>
					<ReactMarkdown className='max100' source={description} />
				</div>

				<div>
					<Dialog
						icon='wrench'
						onClose={this.handleClose}
						title='Test run the model'
						{...this.state}
					>
						{dialogContent}
					</Dialog>
				</div>
			</div>
		);
	}

	testButton = () => this.setState({ testStage: 1 });
	handleOpen = () => this.setState({ isOpen: true, testStage: 0 });
	handleClose = () => this.setState({ isOpen: false });
}

export default Overview;

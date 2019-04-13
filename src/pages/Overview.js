import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import './Overview.css';
import img from '../assets/usage.png';
import Voting from '../components/Voting';
import ReactMarkdown from 'react-markdown';

class Overview extends Component {
	state = {
		title: 'Facial-Expression-Recognition.Pytorch',
		url: 'https://api.deephub.ai/Facial-Expression-Recognition.Pytorch/v1',
		abstract: `A CNN based pytorch implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset`,
		inputs: [{ name: 'image', type: 'image' }],
		outputs: [{ name: 'labels', type: 'string' }],
		description:
			'A CNN based pytorch implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset. '
	};
	render() {
		const { title, description, inputs, outputs, url, abstract } = this.state;
		return (
			<div className='overview'>
				<h2>{title}</h2>
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
						<Button className='deployButton' minimal>
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
				<div className='bg-lightgrey'>
					<ReactMarkdown source={description} />
				</div>
			</div>
		);
	}
}

export default Overview;

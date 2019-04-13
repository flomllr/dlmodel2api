import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

class Voting extends Component {
	state = {
		up: 1341
	};
	up = () => {
		let { up } = this.state;
		up++;
		this.setState({ up });
	};
	down = () => {
		let { up } = this.state;
		up--;
		this.setState({ up });
	};
	render() {
		const { up } = this.state;
		return (
			<div className='voting'>
				<h4 className='inline'>{up}</h4>
				<Icon className='up' icon={IconNames.CHEVRON_UP} onClick={this.up} />
				<Icon
					className='down'
					icon={IconNames.CHEVRON_DOWN}
					onClick={this.down}
				/>
			</div>
		);
	}
}

export default Voting;

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	state = {};

	componentDidMount = () => {
		document.querySelector('#searchInput').addEventListener('keyup', event => {
			event.preventDefault();
			if (event.keyCode === 13) {
				this.search();
			}
		});
	};

	search = () => {
		window.location.href = '/search';
	};

	render() {
		return (
			<div>
				<nav class='bp3-navbar bp3-dark'>
					<div class='bp3-navbar-group bp3-align-left'>
						<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
							<button class='bp3-button bp3-minimal title-link'>
								<div class='bp3-navbar-heading'>
									Deep<b>Hub</b>
								</div>
							</button>
						</Link>

						<input
							id='searchInput'
							class='bp3-input header-search-box'
							placeholder='Search models...'
							type='text'
							onSubmit={this.search}
						/>
					</div>

					<div class='bp3-navbar-group bp3-align-right'>
						<Link
							to='/upload/'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<button class='bp3-button bp3-minimal bp3-icon-upload'>
								Deploy Model
							</button>
						</Link>
						<span class='bp3-navbar-divider' />
						<button class='bp3-button bp3-minimal bp3-icon-user' />
						<button class='bp3-button bp3-minimal bp3-icon-cog' />
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;

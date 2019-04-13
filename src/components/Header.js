import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
	state = {};
	render() {
		return <div>
      <nav class="bp3-navbar bp3-dark">
        <div class="bp3-navbar-group bp3-align-left">
          <div class="bp3-navbar-heading">Title</div>
          <input class="bp3-input header-search-box" placeholder="Search models..." type="text" />
        </div>

        <div class="bp3-navbar-group bp3-align-right">
          <Link to='/upload/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <button class="bp3-button bp3-minimal bp3-icon-upload">Deploy Model</button>
          </Link>
          <span class="bp3-navbar-divider"></span>
          <button class="bp3-button bp3-minimal bp3-icon-user"></button>
          <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
      </nav>
    </div>;
	}
}

export default Header;

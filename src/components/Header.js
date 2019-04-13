import React, { Component } from 'react';
import { Button, Card, Classes, Elevation, Icon, H4, H5, H6} from "@blueprintjs/core";


class Header extends Component {
	state = {};
	render() {
		return <div>
    <nav class="bp3-navbar .modifier">
      <div class="bp3-navbar-group bp3-align-left">
        <div class="bp3-navbar-heading">Blueprint</div>
        <input class="bp3-input" placeholder="Search files..." type="text" />
      </div>
      <div class="bp3-navbar-group bp3-align-right">
        <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
        <button class="bp3-button bp3-minimal bp3-icon-document">Files</button>
        <span class="bp3-navbar-divider"></span>
        <button class="bp3-button bp3-minimal bp3-icon-user"></button>
        <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
      </div>
    </nav>
    </div>;
	}
}

export default Header;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './pages/App';
import Overview from './pages/Overview';
import SearchResult from './pages/SearchResult';
import Upload from './pages/Upload';

function AppRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/overview/'>Overview</Link>
						</li>
						<li>
							<Link to='/search/'>Searchresult</Link>
						</li>
						<li>
							<Link to='/upload/'>Upload</Link>
						</li>
					</ul>
				</nav>

				<Route path='/' exact component={App} />
				<Route path='/overview/' component={Overview} />
				<Route path='/search/' component={SearchResult} />
				<Route path='/upload/' component={Upload} />
			</div>
		</Router>
	);
}

export default AppRouter;

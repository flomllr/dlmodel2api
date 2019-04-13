import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './pages/App';
import Overview from './pages/Overview';
import SearchResultsPage from './pages/SearchResultsPage';
import Upload from './pages/Upload';
import Header from './components/Header';

import './AppRouter.css';


function AppRouter() {
	return (
		<Router>
			<div>
				<Header />

				<div className='main-container'>
					<Route path='/' exact component={App} />
					<Route path='/overview/' component={Overview} />
					<Route path='/search/' component={SearchResultsPage} />
					<Route path='/upload/' component={Upload} />
				</div>
			</div>
		</Router>
	);
}

export default AppRouter;

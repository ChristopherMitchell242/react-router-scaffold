import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import Home from './components/home';
import PageOne from './components/page_one';
import PageTwo from './components/page_two';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/pageOne" component={PageOne}></Route>
					<Route path="/pageTwo" component={PageTwo}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>, 
	document.querySelector('.container')
);


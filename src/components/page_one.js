import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class PageOne extends Component {
	render() { 
		return (
			<div>
				<h1>PageOne!!!</h1>
				<Link to="/pageTwo">Next</Link>
			</div>
		) 
	}
}

export default PageOne;
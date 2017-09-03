import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class PageTwo extends Component {
	render() { 
		return (
			<div>
				<h1>PageTwo!!!</h1> 
				<Link to="/">Back to Home</Link>
			</div>
		) 
	}
}

export default PageTwo;
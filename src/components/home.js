import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {
	render() { 
		return (
			<div>
				<h1>Home!!!</h1>
				<Link to="/pageOne">Next</Link>
			</div>
		)
	}
}

export default Home;
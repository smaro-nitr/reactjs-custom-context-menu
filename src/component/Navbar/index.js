import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tab extends Component {
	render() {
		return (
			// eslint-disable-next-line
			<Link to={{ pathname: this.props.name }} className="nav-item nav-link" style={{ color: this.props.active ? 'yellow' : 'gray' }} onClick={() => { this.props.clickHandler(this.props.id, this.props.name) }}>
				{this.props.name}
			</Link>
		)
	}
}

class Navbar extends Component {
	constructor(props) {
		super(props)
		this.state = { activeArray: [0, 0, 0, 0, 0, 0], details: "click tab to navigate content" }
		this.clickHandler = this.clickHandler.bind(this)
	}

	clickHandler(id, details) {
		var arr = [0, 0, 0, 0, 0, 0]
		arr[id] = 1
		this.setState({ activeArray: arr, details: details })
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link to='/' className="navbar-brand">Custom Context Menu</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Tab id="0" name={this.props.navigationComponent[0]} active={this.state.activeArray[0]} clickHandler={this.clickHandler} />
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar;
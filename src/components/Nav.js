import React, { Component } from 'react'

class Nav extends Component{
	render(){
		return(
			<nav className="navbar navbar-dark bg-dark">
				<h1 className="text-white">
					{this.props.titulo}
				</h1>
				<span className="badge badge-pill badge-light mr-auto">
					{this.props.ntareas}
				</span>
			</nav>

		);
	}
}

export default Nav;

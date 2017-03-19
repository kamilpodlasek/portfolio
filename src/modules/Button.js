import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	getInitialState: function() {
		return { pressed: false };
  	},

  	handleClick: function(e) {
    	this.setState({pressed: true});
    	setTimeout(() => { this.setState({pressed: false}) }, 150);
    	this.props.animate();

		if(this.props.url === "pl" || this.props.url === "en") {
			e.preventDefault();
			this.props.switchLanguage(this.props.url);
		}
  	},

	render() {
		let img = "";
		if(this.props.img)
			img = <img src={require("../img/" + this.props.url + ".png")} alt="button"/>
		else if(this.props.glyphicon)
			img = <span className={"glyphicon glyphicon-" + this.props.glyphicon}></span>

		let className = this.state.pressed ? ' pressed' : '';

	    return (
	      	<Link to={"/" + this.props.url} className={"key key" + this.props.row + className} onClick={e => this.handleClick(e)}>
				{this.props.name}
				{img}
		    </Link>
		);
	}
});
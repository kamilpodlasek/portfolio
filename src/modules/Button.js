import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
	getInitialState: function() {
		return { pressed: false };
  	},

  	handleClick: function() {
    	this.setState({pressed: true});
    	setTimeout(() => { this.setState({pressed: false}) }, 150);
    	this.props.animate();
  	},

	render() {
		var img;
		if(this.props.row === "1")
			img = <img src={require("../img/" + this.props.url + ".png")} alt="button"/>
		else if(this.props.row === "2")
			img = <span className={"glyphicon glyphicon-" + this.props.glyphicon}></span>

		var className = this.state.pressed ? ' pressed' : '';

	    return (
	      	<Link to={"/" + this.props.url}>
				<div className={"key key" + this.props.row + className} onClick={this.handleClick}>
					{this.props.name}
			        {img}
			    </div>
		    </Link>
		);
	}
})
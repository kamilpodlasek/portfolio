import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.simpleLoginSystem;
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/simple-login-system"} target="_blank">Simple Login System</a></h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>
				<img src={require("../img/simple-login-system.jpg")} alt="simple-login-system"/>
    	</div>
		);
  }
}));
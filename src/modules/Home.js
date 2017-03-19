import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.home;
    return (
    	<div className="text-center">
				<h1 className="link">Kamil Podlasek<small>.pl</small></h1>
				<h2>Entry Level Front-End Developer</h2>
				<h3>{data.description}</h3>
	    </div>
		);
  }
}));
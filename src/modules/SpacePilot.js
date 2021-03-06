import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.spacePilot;
    return (
    	<div>
    		<h2 className="text-center"><a href={"projects/space-pilot"} target="_blank">Space Pilot</a></h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>
				<img src={require("../img/space-pilot.jpg")} alt="space-pilot"/>
    	</div>
		);
  }
}));
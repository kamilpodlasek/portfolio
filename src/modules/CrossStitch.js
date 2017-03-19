import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.crossStitch;
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/cross-stitch"} target="_blank">Cross-Stitch Generator</a></h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>			
				<img src={require("../img/cross-stitch.jpg")} alt="cross-stitch"/>
				<img src={require("../img/cross-stitch1.jpg")} alt="cross-stitch1"/>
    	</div>
		);
  }
}));
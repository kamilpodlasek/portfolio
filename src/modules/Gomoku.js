import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.gomoku;
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/gomoku"} target="_blank">Gomoku</a></h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>
				<img src={require("../img/gomoku.jpg")} alt="gomoku"/>
    	</div>
		);
  }
}));
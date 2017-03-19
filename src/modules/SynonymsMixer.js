import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.synonymsMixer;
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/synonyms-mixer"} target="_blank">Synonyms Mixer</a></h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>
				<img src={require("../img/synonyms-mixer.jpg")} alt="synonyms-mixer"/>
    	</div>
		);
  }
}));
import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.contact;
    return (
    	<div>
    		<h2 className="text-center">{data.header}</h2>
				<h3>E-mail: <a href={"mailto:admin@kamilpodlasek.pl"}>admin@kamilpodlasek.pl</a></h3>
				<h3>GitHub: <a href="https://github.com/kamilpodlasek" target="_blank">github.com/kamilpodlasek</a></h3>
    	</div>
		);
  }
}));
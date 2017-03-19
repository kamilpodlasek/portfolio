import React from 'react'
import { connect } from 'react-redux'

export default connect(state => ({content: state.content}))(React.createClass({
  render() {
    const data = this.props.content.page.about;
    return (
    	<div>
   			<h2 className="text-center">{data.header}</h2>
				<div dangerouslySetInnerHTML={{__html: data.description}}></div>				
			</div>
		);
  }
}));
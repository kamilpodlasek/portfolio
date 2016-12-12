import React from 'react'

export default React.createClass({
  render() {
  	const imgStyle = {
	  width: 'auto',
	  margin: '0 0 0 6px'
	};
    return (
    	<div>
    		<h2 className="text-center">Kontakt</h2>
			<h3>E-mail: <a href={"mailto:admin@kamilpodlasek.pl"}>admin@kamilpodlasek.pl</a></h3>
			<h3>GitHub: <a href="https://github.com/kamilpodlasek" target="_blank">github.com/kamilpodlasek</a></h3>
			<h3>CV: <a href="Kamil_Podlasek_CV.pdf" target="_blank"><img src={require("../img/pdf.png")} alt={"pdf"} style={imgStyle}/></a></h3>
    	</div>
	);
  }
})
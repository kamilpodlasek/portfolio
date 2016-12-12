import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
			<h2 className="text-center"><a href={"projects/cross-stitch"} target="_blank">Cross-Stitch Generator</a></h2>
			<h3>Generator haftu krzyżykowego - aplikacja generuje wzór do haftu krzyżykowego z dowolnego zdjęcia.</h3>
			<h3>Wzór gotowy do druku wraz ze spisem nici marki DMC potrzebnych do wyszycia obrazu można pobrać w formacie PDF.</h3>
			<h3>Użyte technologie:</h3>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Bootstrap</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>PHP</li>
				<li>Biblioteka GD (PHP)</li>
				<li>Biblioteka FPDF (PHP)</li>
				<li>AJAX</li>
			</ul>
			<img src={require("../img/cross-stitch.jpg")} role="presentation"/>
			<img src={require("../img/cross-stitch1.jpg")} role="presentation"/>
    	</div>
	);
  }
})
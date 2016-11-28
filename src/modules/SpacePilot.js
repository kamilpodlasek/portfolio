import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h2 className="text-center"><a href={"projects/space-pilot"} target="_blank">Space Pilot</a></h2>
			<h3>Gra w której zadaniem gracza jest utrzymanie sondy kosmicznej w atmosferze księżyca.</h3>
			<h3>Sterowanie odbywa się za pomocą myszy, gracz ma za zadanie odbijać sondę kursorem.</h3>
			<h3>Z każdym kolejnym poziomem gracz dostaje więcej punktów, a każde odbicie powoduje przyspieszenie sondy.</h3>
			<h3>Użyte technologie:</h3>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>jQuery</li>
				<li>PHP</li>
				<li>AJAX</li>
				<li>MySQL</li>
			</ul>
			<img src={"img/space-pilot.jpg"} role="presentation"/>
    	</div>
	);
  }
})
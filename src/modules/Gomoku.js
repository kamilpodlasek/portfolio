import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
			<h2 className="text-center"><a href={"projects/gomoku"} target="_blank">Gomoku</a></h2>
			<h3>Gra dla dwóch osób "Gomoku" - kółko i krzyżyk na 5 pól w rzędzie.</h3>
			<h3>Można zmieniać ustawienia planszy i ilość pól w rzędzie potrzebną do zwycięstwa.</h3>
			<h3>Użyte technologie:</h3>
			<ul>
				<li>React</li>
			</ul>
			<img src={require("../img/gomoku.jpg")} role="presentation"/>
    	</div>
	);
  }
})
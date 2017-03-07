import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h2 className="text-center"><a href={"projects/tetris"} target="_blank">Tetris</a></h2>
				<h3>Przeglądarkowa wersja słynnej gry "Tetris".</h3>
				<h3>Gracz ma za zadanie tak kierować spadającymi klockami, żeby tworzyły pełne rzędy które następnie są usuwane.</h3>
				<h3>Rozgrywka kończy się w momencie, gdy nowo powstały klocek koliduje z pozostałymi kostkami.</h3>
				<h3>Użyte technologie:</h3>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
				</ul>
				<img src={require("../img/tetris.jpg")} alt="tetris"/>
    	</div>
	);
  }
})
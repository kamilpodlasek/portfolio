import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/synonyms-mixer"} target="_blank">Synonyms Mixer</a></h2>
				<h3>Mikser synonimów - aplikacja pozwalająca na wygenerowanie dowolnej ilości artykułów z synonimizowanego tekstu i pobranie ich.</h3>
				<h3>Narzędzie szczególnie przydatne dla osób zajmujących się pozycjonowaniem stron internetowych.</h3>
				<h3>Użyte technologie:</h3>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Bootstrap</li>
					<li>JavaScript</li>
					<li>Biblioteka JSZip (JS)</li>
					<li>jQuery</li>
				</ul>
				<img src={require("../img/synonyms-mixer.jpg")} alt="synonyms-mixer"/>
    	</div>
	);
  }
})
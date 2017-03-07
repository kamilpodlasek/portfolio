import React from 'react'

export default React.createClass({
  render() {
    return (
    	<div>
				<h2 className="text-center"><a href={"projects/simple-login-system"} target="_blank">Simple Login System</a></h2>
				<h3>Prosty system logowania i rejestracji korzystający z angular-in-memory-web-api.</h3>
				<h3>System posiada panel administratora pozwalający na zarządzanie użytkownikami.</h3>
				<h3>Użyte technologie:</h3>
				<ul>
					<li>Angular</li>
				</ul>
				<img src={require("../img/simple-login-system.jpg")} alt="simple-login-system"/>
    	</div>
	);
  }
})
import React from 'react';
import Button from './modules/Button'

export default React.createClass({
  getInitialState : function () {
    return({ spinner : "spinner", component : "hidden" });
  },
  componentWillMount : function () {
    setTimeout(() => { this.changeState(); }, 900);
  },
  animate : function() {
    this.changeState();
    setTimeout(() => { this.changeState(); }, 700);
  },
  changeState : function() {
    this.setState({
      spinner : this.state.spinner === "hidden" ? "spinner" : "hidden",
      component : this.state.component === "hidden" ? "component" : "hidden"
    });
  },
  render() {
    return (
      <div>
        <div className="pc">
          <div className="screenFrame">
            <div className="screen">
              <div className="window">
                <div className="content">
                  <div className={this.state.spinner}>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                  </div>
                  <div className={this.state.component}>
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="screenBottom">
            <img src={require("./img/logo.png")} alt="logo"/>
          </div>
          <div className="screenHolder">
            <div className="screenHolderTop"></div>
            <div className="screenHolderBottom"></div>
          </div>
        </div>

        <div className="keyboard text-center">
          <div className="projects">
            <div className="row1">
              <Button url="space-pilot" row="1" name="Space Pilot" img={true} animate={this.animate} />
              <Button url="tetris" row="1" name="Tetris" img={true} animate={this.animate} />
              <Button url="gomoku" row="1" name="Gomoku" img={true} animate={this.animate} />
              <Button url="synonyms-mixer" row="1" name="Synonyms Mixer" img={true} animate={this.animate} />
            </div>
            <div className="row2">
              <Button url="cross-stitch" row="2" name="Cross-Stitch Generator" img={false} animate={this.animate} />
              <Button url="simple-login-system" row="2" name="Simple Login System" img={false} animate={this.animate} />
            </div>
          </div>
          <div className="others">
            <div className="languages">
              <Button url="polish" row="2" animate={this.animate} />
              <Button url="english" row="2" animate={this.animate} />
            </div>
            <Button url="about-me" row="2" name="O mnie" glyphicon="user" animate={this.animate} />
            <Button url="contact" row="2" name="Kontakt" glyphicon="envelope" animate={this.animate} />
          </div>
        </div>
      </div>
    );
  }
})
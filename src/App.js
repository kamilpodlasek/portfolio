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
            <img src={"img/logo.png"} role="presentation"/>
          </div>
          <div className="screenHolder">
            <div className="screenHolderTop"></div>
            <div className="screenHolderBottom"></div>
          </div>
        </div>

        <div className="keyboard text-center">
          <div className="margin"></div>
          <Button url="space-pilot" row="1" name="Space Pilot" animate={this.animate} />
          <Button url="tetris" row="1" name="Tetris" animate={this.animate} />
          <Button url="cross-stitch" row="1" name="Cross-Stitch Generator" animate={this.animate} />
          <Button url="synonyms-mixer" row="1" name="Synonyms Mixer" animate={this.animate} />
          <div className="margin"></div>
          <Button url="about-me" row="2" name="O mnie" glyphicon="user" animate={this.animate} />
          <Button url="contact" row="2" name="Kontakt" glyphicon="envelope" animate={this.animate} />
        </div>
      </div>
    );
  }
})
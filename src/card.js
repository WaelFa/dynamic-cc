import React, { Component } from 'react'

export default class Card extends Component {
  
  constructor(props) {
    super(props)
  }
  
  
  render() {
    return (
      <div>
        <div className="Card">
          <h1>CREDIT CARD</h1>
          <img className="chip" src={require("./chip.png")} />
          <h3>{this.props.cardNum1} &nbsp; {this.props.cardNum2} &nbsp; {this.props.cardNum3} &nbsp; {this.props.cardNum4}</h3>
          <h4 className="pin">5421</h4>
          <h4 className="holder">{this.props.cardName}</h4>
          <div className="Logos">
            <img src={require("./master.png")} />
            <img src={require("./VISA.png")} />
          </div>
          <div class="exp-date-wrapper">
            <div class="left-label upper-labels">VALID THRU</div>
            <div class="exp-date">
              <div class="upper-labels">MONTH/YEAR</div>
              <div class="date">
                {this.props.cardDate1}/{this.props.cardDate2}
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

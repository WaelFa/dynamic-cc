import React, { Component } from 'react'

export default class Card extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       card1:"****",
       card2:"****",
       card3:"****",
       card4:"****", 
       date:"12/45",
       name:"Wael Fadhel"
    }
  }
  
  
  render() {
    return (
      <div>
        <div className="Card">
          <h1>CREDIT CARD</h1>
          <img className="chip" src={require("./chip.png")} />
          <h3>{this.state.card1} &nbsp; {this.state.card2} &nbsp; {this.state.card3} &nbsp; {this.state.card4}</h3>
          <h4 className="pin">5421</h4>
          <h4 className="holder">{this.state.name}</h4>
          <div className="Logos">
            <img src={require("./master.png")} />
            <img src={require("./VISA.png")} />
          </div>
          <div class="exp-date-wrapper">
            <div class="left-label upper-labels">VALID THRU</div>
            <div class="exp-date">
              <div class="upper-labels">MONTH/YEAR</div>
              <div class="date">
                {this.state.date}
          </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

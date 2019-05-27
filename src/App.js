import React, { Component } from 'react'
import './App.css';
import Card from './card'
import CardInput from './cardInput'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      card1: "****",
      card2: "****",
      card3: "****",
      card4: "****",
      name: "Wael Fadhel",
      date: "12/21",
    }
  }


  getstatefrom = (a, b, c, d, e , f) => {
    this.setState({
      card1: a,
      card2: b,
      card3: c,
      card4: d,
      name: e,
      date: f,  
    })
    console.log(this.card1, this.card2);
  }

  render() {
    return (
      <div>
        <Card cardNum1={this.state.card1} cardNum2={this.state.card2} cardNum3={this.state.card3} cardNum4={this.state.card4} cardName={this.state.name} cardDate={this.state.date}/>
        <CardInput getstatefrom={this.getstatefrom} />
      </div>

    )
  }
}

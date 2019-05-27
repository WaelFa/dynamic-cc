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


  getstatefrom = (a, b, c, d, e , f, g) => {
    this.setState({
      card1: a,
      card2: b,
      card3: c,
      card4: d,
      name: e,
      date1: f,
      date2: g  
    })
  }

  render() {
    return (
      <div>
        <Card cardNum1={this.state.card1} cardNum2={this.state.card2} cardNum3={this.state.card3} cardNum4={this.state.card4} cardName={this.state.name} cardDate1={this.state.date1} cardDate2={this.state.date2}/>
        <CardInput getstatefrom={this.getstatefrom} />
      </div>

    )
  }
}

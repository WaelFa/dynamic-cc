import React, { Component } from 'react';


export default class CardInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card1: "",
            card2: "",
            card3: "",
            card4: "",
            name: "",
            date1: "",
            date2: "",
        }
    }
    nameUpdate = (event) => {
        this.setState({ name: event.target.value }, () => this.props.getstatefrom(this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.name, this.state.date1, this.state.date2))
    }
    numberUpdate = (event) => {
        var num = event.target.value;
        var cardIn1, cardIn2, cardIn3, cardIn4;
        while (num.length < 16) {
            num = num + "*"
        }
        cardIn1 = num.substring(0, 4);
        cardIn2 = num.substring(4, 8);
        cardIn3 = num.substring(8, 12);
        cardIn4 = num.substring(12, 16);
        this.setState({ card1: cardIn1, card2: cardIn2, card3: cardIn3, card4: cardIn4 }, () => this.props.getstatefrom(this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.name, this.state.date1, this.state.date2));
    }

    dateUpdate1 = (event) => {
        this.setState({ date1: event.target.value }, () => this.props.getstatefrom(this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.name, this.state.date1, this.state.date2))
    }
    dateUpdate2 = (event) => {
        this.setState({ date2: event.target.value }, () => this.props.getstatefrom(this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.name, this.state.date1, this.state.date2))
    }

    render() {
        return (
            <center>
                <form>
                    <input type="text" onChange={this.nameUpdate} maxLength="20" />
                    <input type="text" onChange={this.numberUpdate} maxLength="16" />
                    <input className="month" type="text" onChange={this.dateUpdate1} maxLength="2" />
                    /
                    <input className="year" type="text" onChange={this.dateUpdate2} maxLength="2" />
                </form>
            </center>
        )
    }
}

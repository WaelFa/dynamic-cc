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
            date: "",
        }
    }
    nameUpdate = (event) => {
        this.setState({ name: event.target.value },()=> this.props.getstatefrom(this.state.card1,this.state.card2,this.state.card3,this.state.card4, this.state.name,this.state.date))
    }
    numberUpdate = (event) => {
        var num = event.target.value;
        var cardIn1,cardIn2,cardIn3,cardIn4;
        while (num.length <16){
            num= num+"*"
        }
        cardIn1=num.substring(0,4);
        cardIn2=num.substring(4,8);
        cardIn3=num.substring(8,12);
        cardIn4=num.substring(12,16);
        this.setState({card1: cardIn1, card2:cardIn2, card3:cardIn3, card4:cardIn4 },()=> this.props.getstatefrom(this.state.card1,this.state.card2,this.state.card3,this.state.card4, this.state.name,this.state.date));
    }

    dateUpdate = (event) => {
        this.setState({ date: event.target.value },()=> this.props.getstatefrom(this.state.card1,this.state.card2,this.state.card3,this.state.card4, this.state.name,this.state.date))
    }


    render() {
        return (
            <center>
                <form>
                    <input type="name" onChange={this.nameUpdate} />
                    <input type="number" onChange={this.numberUpdate} />
                    <input type="month" value="Validation" onChange={this.dateUpdate} />
                </form>
                {this.state.name}
            </center>
        )
    }
}

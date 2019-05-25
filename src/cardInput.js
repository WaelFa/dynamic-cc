import React, { Component } from 'react';


export default class CardInput extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <center>
                <form>  
                    <input type="name" value="Name"/>
                    <input type="number" value="Card Number" />
                    <input type="date" value="Validation" />
                </form>
            </center>
        )
    }
}

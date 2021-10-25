import React, { Component } from 'react';
import buySellTrad from '../../img/buySellTrad.png';


class QuestionBuySellTrad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <div className="container">
                <img src={ buySellTrad} alt="" />
                </div>
        );
    }
}
 
export default QuestionBuySellTrad;
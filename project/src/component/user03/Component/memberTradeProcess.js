import React, { Component } from "react";
import TradeProcess from './memberPage_Content/buyerInfo/tradeprocess_index';

class TradeProcessinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <TradeProcess />
            </div>
        );
    }
}

export default TradeProcessinfo;

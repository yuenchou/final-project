import React, { Component } from "react";
import BuyIndex from '../memberPage_Content/buyerInfo/buy_index';

class BuyerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <BuyIndex/>
            </div>
        );
    }
}

export default BuyerInfo;

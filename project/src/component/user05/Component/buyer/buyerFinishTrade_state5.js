import React, { Component } from 'react';
import '../../css/myStyle05.css';
import { NavLink, Route, Redirect } from 'react-router-dom';

class BuyerFinishTrade_state5 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="d-flex mt-4 justify-content-center mb-4">
                    回到 <NavLink to="/VGT/memberPage/buyerInfo/tradeCart" className="text-decoration-none myLink">會員中心</NavLink>
                </div>
            </div>
        );
    };
};

export default BuyerFinishTrade_state5;
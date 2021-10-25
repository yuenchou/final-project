import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Process1 from './buyerinfo_Process/buyer_Process1';
import Process2 from './buyerinfo_Process/buyer_Process2';
import Process3 from './buyerinfo_Process/buyer_Process3';
import Process4 from './buyerinfo_Process/buyer_Process4';
import '../../../../user05/css/myStyle05.css';



class TradeProcess extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <React.Fragment>
                    <Route exact path="/VGT/memberPage/buyer/tradecart" component={Process1}></Route>
                    <Route exact path="/VGT/memberPage/buyer/tradeprocess/:orderid" component={Process2}></Route>
                    <Route exact path="/VGT/memberPage/buyer/tradereceive/:orderid" component={Process3}></Route>
                    <Route exact path="/VGT/memberPage/buyer/tradebuyercomplete/:orderid" component={Process4}></Route>
                </React.Fragment>
        );
    }
}

export default TradeProcess; 
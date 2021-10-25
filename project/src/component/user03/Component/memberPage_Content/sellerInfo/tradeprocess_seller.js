import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import SProcess1 from './sellerinfo_Process/dealerProcess1';
import SProcess2 from './sellerinfo_Process/dealerProcess2';
import '../../../../user05/css/myStyle05.css';



class TradeProcessSeller extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <React.Fragment>
                    <Route exact path="/VGT/memberPage/seller/tradetransfer/:orderid" component={SProcess1}></Route>
                    <Route exact path="/VGT/memberPage/seller/tradesellercomplete/:orderid" component={SProcess2}></Route>
                </React.Fragment>
        );
    }
}

export default TradeProcessSeller; 
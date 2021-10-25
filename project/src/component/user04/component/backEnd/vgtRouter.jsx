import { Switch, Route, Redirect } from 'react-router-dom';
import Member from './vgtMember';
import Order from './vgtOrder';
import OrderCmmt from './vgtOrderCmmt';
import Product from './vgtProduct';
import ProductCmmt from './vgtProductCmmt';
import Appeal from './vgtAppeal.jsx';
import AppealRply from './vgtAppealRply';
import News from './vgtNews';
import Record from './vgtRecord';
import Discount from './vgtDiscount';
import React, { Component } from "react";



class RouterBackEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
           <Switch>
                <Route exact path="/vgt/vgtPages">
                    <Redirect exact to="/vgt/vgtMember"></Redirect>
                </Route>
                <Route exact path="/vgt/vgtMember" component={Member}></Route>
                <Route exact path="/vgt/vgtOrder" component={Order}></Route>
                <Route exact path="/vgt/vgtOrderCmmt" component={OrderCmmt}></Route>
                <Route exact path="/vgt/vgtProduct" component={Product}></Route>
                <Route exact path="/vgt/vgtProductCmmt" component={ProductCmmt}></Route>
                <Route exact path="/vgt/vgtAppeal" component={Appeal}></Route>
                <Route exact path="/vgt/vgtAppealRply" component={AppealRply}></Route>
                <Route exact path="/vgt/vgtNews" component={News}></Route>
                <Route exact path="/vgt/vgtRecord" component={Record}></Route>
                <Route exact path="/vgt/vgtDiscount" component={Discount}></Route>
            </Switch>
        );
    }
}

export default RouterBackEnd;















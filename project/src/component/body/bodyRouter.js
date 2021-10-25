import React, { Component } from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import Frontpage from '../user02/Component/frontPage';
import ProductSearch from '../user06/Component/product_Search';
import ProductPuton from '../user06/Component/product_Puton';
import ProductDetail from '../user06/Component/product_Detail';
import MemberPage from '../user03/Component/memberPage';
import QuestionPage from '../user02/Component/questionPage';
import Register from '../user01/Component/register';
import CreditCard from '../user01/Component/creditCard';
import Pages from '../user04/component/vgtPages.js';

const Router = () => (
    
    <Switch>
        <Route exact path="/">
            <Redirect to="/VGT/FrontPage"></Redirect>
        </Route>
        <Route path="/VGT/FrontPage" component={Frontpage}></Route>
        <Route path="/VGT/ProductSearchPage" component={ProductSearch}></Route>
        <Route path="/VGT/ProductPutonPage" component={ProductPuton}></Route>
        <Route path="/VGT/ProductDetailPage/:id" component={ProductDetail}></Route>
        <Route path="/VGT/MemberPage" component={MemberPage}></Route>
        <Route path="/VGT/HelpCenterPage" component={MemberPage}></Route>
        <Route path="/VGT/QuestionPage" component={QuestionPage}></Route>
        <Route path="/VGT/Register" component={Register}></Route>
        <Route path="/VGT/creditCardPage/:vgtinput" component={CreditCard} ></Route>
        <Route path="/vgt/vgtPages" component={Pages} ></Route>

    </Switch>
    
);

class BodyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Router/>
            </React.Fragment>
         );
    }
}




export default BodyRouter;

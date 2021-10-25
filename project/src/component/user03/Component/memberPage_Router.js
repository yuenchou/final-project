import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import StoredValue from '../../user01/Component/storedValue';
import Profile from '../../user03/Component/memberPage_Content/memberProfile';
import BuyerInfo from '../../user03/Component/memberPage_Content/memberBuyerInfo';
import SellerInfo from "../../user03/Component/memberPage_Content/memberSellerInfo";
import Credit from '../../user03/Component/memberPage_Content/memberCredit';
import CustomerService from '../../user03/Component/memberPage_Content/memberCustomerService';
import TradeProcess from './memberTradeProcess';
import TradeProcessSeller from './memberPage_Content/sellerInfo/tradeprocess_seller';


const PageRouter = () => (
    <React.Fragment>
        <Route exact path="/VGT/MemberPage">
            <Redirect to="/VGT/MemberPage/profile"></Redirect>
        </Route>
        <Route path="/VGT/MemberPage/storedValue/:vgtid" component={StoredValue}></Route>
        <Route path="/VGT/MemberPage/profile" component={Profile}></Route>

        <Route path="/VGT/MemberPage/buyerInfo" component={BuyerInfo}></Route>
        <Route path="/VGT/MemberPage/buyer/tradecart" component={TradeProcess}></Route>
        <Route path="/VGT/MemberPage/buyer/tradeprocess" component={TradeProcess}></Route>
        <Route path="/VGT/MemberPage/buyer/tradereceive" component={TradeProcess}></Route>
        <Route path="/VGT/MemberPage/buyer/tradebuyercomplete" component={TradeProcess}></Route>

        <Route path="/VGT/MemberPage/sellerInfo" component={SellerInfo}></Route>
        <Route path="/VGT/MemberPage/seller/tradetransfer" component={TradeProcessSeller}></Route>
        <Route path="/VGT/MemberPage/seller/tradesellercomplete" component={TradeProcessSeller}></Route>


        <Route path="/VGT/MemberPage/credit" component={Credit}></Route>
        <Route path="/VGT/MemberPage/customerService" component={CustomerService}></Route>
    </React.Fragment>
);

class MemberPageRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <PageRouter/>                                                   
         );
    }
}


export default MemberPageRouter;
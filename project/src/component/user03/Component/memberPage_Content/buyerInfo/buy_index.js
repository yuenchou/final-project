import React, { Component } from 'react';
import {NavLink, Route, Redirect } from 'react-router-dom';
import TradeBuyCart from '../buyerInfo/buyerinfo_Trade/tradeBuyCart';
import TradeBuyOrder from '../buyerInfo/buyerinfo_Trade/tradeBuyOrder';
import TradeBuyReceive from './buyerinfo_Trade/tradeBuyReceive';
import TradeBuyComplete from '../buyerInfo/buyerinfo_Trade/tradeBuyComplete';
import TradeBuyCancel from '../buyerInfo/buyerinfo_Trade/tradeBuyCancel';
import BuyerFinishTrade from '../../../../user05/Component/buyer/buyerFinishTrade';
import BuyerCancelTrade from '../../../../user05/Component/buyer/buyerCancelTrade';
import '../../../css/style03.css';


class BuyIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userid: 2
        }
    }

    render() { 
        return (
            
                <div className="container mt-5">
                    <nav aria-label="Page navigation" className=" border-bottom">
                        <ul className="pagination  nav-fill  bg-project">
                            <li className="nav-item bg-project">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeCart">購物車</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeOrder">我的訂單</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeReceive">交易中商品</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeComplete">已完成交易</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeCancel">申訴中交易</NavLink>
                            </li>                           
                        </ul>
                    </nav>                    
                    <React.Fragment>
                        <Route exact path="/VGT/MemberPage/buyerInfo">
                            <Redirect to="/VGT/memberPage/buyerInfo/tradeCart"></Redirect>
                        </Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart" component={TradeBuyCart}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeOrder" component={TradeBuyOrder}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeReceive" component={TradeBuyReceive}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeComplete" component={TradeBuyComplete}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCancel" component={TradeBuyCancel}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/finishTrade" component={BuyerFinishTrade}></Route>                                
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/cancelTrade" component={BuyerCancelTrade}></Route>                                
                    </React.Fragment>  
                                                 
                </div>
                                      
         );
    }
}
 
export default BuyIndex;
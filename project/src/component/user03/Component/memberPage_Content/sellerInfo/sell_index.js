import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import TradeSellTransfer from '../sellerInfo/sellerinfo_Trade/tradeSellTransfer';
import TradeSellCancel from '../sellerInfo/sellerinfo_Trade/tradeSellCancel';
import TradeSellComplete from '../sellerInfo/sellerinfo_Trade/tradeSellComplete';
import TradeFinance from '../sellerInfo/sellerinfo_Management/tradeFinance';
import TradeManage from '../sellerInfo/sellerinfo_Management/tradeManage';
import DealerProcess1 from '../sellerInfo/sellerinfo_Process/dealerProcess1';
import DealerFinishTrade from '../../../../user05/Component/dealer/dealerFinishTrade';
import DealerCancelTrade from '../../../../user05/Component/dealer/dealerCancelTrade';
import '../../../css/style03.css';
import axios from 'axios';


class SellIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vgtid: 0
        }
    }

    componentDidMount () {
        axios.get("http://localhost:3000/VgtLogin/login").then((response) => {
            this.setState({vgtid: response.data[0].vgtid});
            
        });
    };

    render() { 
        return (
            <BrowserRouter>
                <div className="container mt-5">
                    <nav aria-label="Page navigation" className=" border-bottom">
                        <ul className="pagination  nav-fill  bg-project">
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to={`/VGT/memberPage/sellerInfo/tradeManage/${this.state.vgtid}`}>我的商品</NavLink>
                            </li>                           
                            <li className="nav-item bg-project">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/sellerInfo/tradeTransfer">交易中商品</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/sellerInfo/tradeComplete">已完成交易</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/sellerInfo/tradeCancel">已取消交易</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/sellerInfo/tradeFinance">財務管理</NavLink>
                            </li>                           
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/VGT/MemberPage/sellerInfo">
                            <Redirect to="/VGT/memberPage/sellerInfo/tradeManage"></Redirect>
                        </Route>
                        <Route path="/VGT/memberPage/sellerInfo/tradeTransfer" component={TradeSellTransfer}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/tradeComplete" component={TradeSellComplete}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/tradeCancel" component={TradeSellCancel}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/tradeManage/:id" component={TradeManage}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/tradeFinance" component={TradeFinance}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/inTrade" component={DealerProcess1}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/CompleteTrade" component={DealerFinishTrade}></Route>
                        <Route path="/VGT/memberPage/sellerInfo/CancelTrade" component={DealerCancelTrade}></Route>
                    </Switch>                                
                </div>
            </BrowserRouter>                            
         );
    }
}
 
export default SellIndex;
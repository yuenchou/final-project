import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import '../../user03/css/style03.css';
import Member from './vgtMember';
import Order from './vgtOrder';
import OrderCmmt from './vgtOrderCmmt';
import Product from './vgtProduct';
import ProductCmmt from './vgtProductCmmt';
import Appeal from './vgtAppeal';
import AppealRply from './vgtAppealRply';
import News from './vgtNews';
import Record from './vgtRecord';
import Discount from './vgtDiscount';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <nav aria-label="Page navigation" className=" border-bottom">
                    <ul className="pagination  nav-fill  bg-project">
                        <li className="nav-item bg-project">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtMember">會員資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtOrder">訂單資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtOrderCmmt">訂單留言</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtProduct">商品資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtProductCmmt">商品留言</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtAppeal">申訴資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtAppealRply">申訴回覆</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtNews">公告資料</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtRecord">儲值歷程</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link page-link" exact to="/vgt/vgtDiscount">商品折扣</NavLink>
                        </li>
                    </ul>
                </nav>

                <React.Fragment>
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

                </React.Fragment>

            </div>



        );

    }
}

export default Nav;
import React, { Component } from 'react';
import { NavLink, Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import '../../../user03/css/style03.css';
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

import '../../css/user_04.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                {/* Page navigation  */}
                <div className="container ">
                    <nav className="  navbar-expand-xl nav-fill text-nowrap border-bottom  ">
                        <ul className="pagination  bg-project  btn-project  "  >
                            <li className="nav-item bg-project  listTitle  " >
                                <NavLink className="nav-link btn-project  bg-project " exact to="/vgt/vgtPages/vgtMember">會員資料</NavLink>
                            </li>
                            <li className=" dropdown bg-project nav-item    ">
                                <a className="nav-link dropdown-toggle btn-project bg-project   " href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    訂單資料
                                </a>

                                <ul className="dropdown-menu list-project " aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item  ">
                                        <NavLink className="nav-link  button" exact to="/vgt/vgtPages/vgtOrder">訂單資料</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtOrderCmmt">訂單留言</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className=" dropdown bg-project nav-item ">
                                <a className="nav-link dropdown-toggle btn-project bg-project" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    商品資料
                                </a>

                                <ul className="dropdown-menu  list-project  bg-project " aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item  ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtProduct">商品資料</NavLink>
                                    </li>
                                    <li className="nav-item  ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtProductCmmt">商品留言</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtDiscount">商品折扣</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item bg-project ">
                                <NavLink className="nav-link btn-project bg-project " exact to="/vgt/vgtPages/vgtNews">公告資料</NavLink>
                            </li>
                            <li className="nav-item  bg-project ">
                                <NavLink className="nav-link btn-project bg-project" exact to="/vgt/vgtPages/vgtRecord">儲值歷程</NavLink>
                            </li>
                            <li className=" dropdown bg-project nav-item">
                                <a className="nav-link dropdown-toggle btn-project bg-project" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    申訴資料
                                </a>

                                <ul className="dropdown-menu  list-project  bg-project" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtAppeal">申訴資料</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink className="nav-link button" exact to="/vgt/vgtPages/vgtAppealRply">申訴回覆</NavLink>
                                    </li>
                                </ul>
                            </li>
                         

                        </ul>
                        


                    </nav>



                </div>
                <Switch>
                    <Route exact path="/vgt/vgtPages">
                        <Redirect exact to="/vgt/vgtPages/vgtMember"></Redirect>
                    </Route>
                    <Route exact path="/vgt/vgtPages/vgtMember" component={Member}></Route>
                    <Route exact path="/vgt/vgtPages/vgtOrder" component={Order}></Route>
                    <Route exact path="/vgt/vgtPages/vgtOrderCmmt" component={OrderCmmt}></Route>
                    <Route exact path="/vgt/vgtPages/vgtProduct" component={Product}></Route>
                    <Route exact path="/vgt/vgtPages/vgtProductCmmt" component={ProductCmmt}></Route>
                    <Route exact path="/vgt/vgtPages/vgtAppeal" component={Appeal}></Route>
                    <Route exact path="/vgt/vgtPages/vgtAppealRply" component={AppealRply}></Route>
                    <Route exact path="/vgt/vgtPages/vgtNews" component={News}></Route>
                    <Route exact path="/vgt/vgtPages/vgtRecord" component={Record}></Route>
                    <Route exact path="/vgt/vgtPages/vgtDiscount" component={Discount}></Route>
               

                </Switch>
            </BrowserRouter>



        );
    }
}

export default Nav;
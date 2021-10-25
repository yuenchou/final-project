import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AppealRequest from '../Component/appeal_request';
import AppealResponse from '../Component/appeal_response';
import AppealRecord from '../Component/appeal_record';
import aaa from  '../css/style.scss';
import bbb from '../css/style.css';


class AppealIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <BrowserRouter>
                <div className="container ">
                    <nav aria-label="Page navigation" className=" border-bottom">
                        <ul className="pagination  nav-fill  bg-project">
                            <li className="nav-item bg-project">
                                <NavLink className="nav-link page-link " to="/VGT/memberPage/appealRequest">我要申訴</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link " to="/VGT/memberPage/appealResponse">客服中心回覆</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/appealRecord">申訴紀錄</NavLink>
                            </li>                            
                        </ul>
                    </nav>
                    <Switch>
                    <Route path="/VGT/MemberPage/customerService">
                        <Redirect to="/VGT/memberPage/appealRequest"></Redirect>
                    </Route>
                        <Route  path="/VGT/memberPage/appealRequest" component={AppealRequest}></Route>
                        <Route  path="/VGT/memberPage/appealResponse" component={AppealResponse}></Route>
                        <Route  path="/VGT/memberPage/appealRecord" component={AppealRecord}></Route>
                    </Switch>                 
                    <button className="btn btn-project" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                        個資注意事項:
                    </button>
                    <div className="" id="collapseExample">
                        <div className="">
                            <ul>
                                <li>1.當您使用線上申訴修改會員資料，等於您已同意授權客服端為您操作處理；</li>
                                <li>2.為保障您的個人資料安全，上傳證件時，請在證件空白處注明：僅供VGT確認身份使用；</li>
                                <li>3.若需提供他人證件，請在被授權的證件空白處注明：僅供VGT確認身份使用；</li>
                            </ul>
                        </div>
                    </div>               
                </div>
            </BrowserRouter>                            
         );
    }
}
 
export default AppealIndex;
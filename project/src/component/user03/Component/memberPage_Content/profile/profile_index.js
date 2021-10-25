import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import BasicInfo from '../profile/basicInfo';
import Password from '../profile/password';
import '../../../css/style03.css';


class ProfileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <BrowserRouter>
                <div className="container">
                    <nav aria-label="Page navigation" className=" border-bottom">
                        <ul className="pagination  nav-fill  bg-project">
                            <li className="nav-item bg-project">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/profile/basicInfo">個人資訊</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/profile/password">更改密碼</NavLink>
                            </li>                           
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/VGT/MemberPage/profile">
                            <Redirect to="/VGT/memberPage/profile/basicInfo"></Redirect>
                        </Route>
                        <Route path="/VGT/memberPage/profile/basicInfo" component={BasicInfo}></Route>
                        <Route path="/VGT/memberPage/profile/password" component={Password}></Route>
                    </Switch>                                
                </div>
            </BrowserRouter>                            
         );
    }
}
 
export default ProfileIndex;
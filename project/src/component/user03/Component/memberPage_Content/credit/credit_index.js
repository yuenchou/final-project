import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import CreditFromOther from '../credit/creditFromOther';
import CrediToOther from '../credit/creditToOther';
import '../../../css/style03.css';


class CreditIndex extends Component {
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
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/credit/creditFromOther">買家對您的評價</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" to="/VGT/memberPage/credit/creditToOther">賣家對您的評價</NavLink>
                            </li>                           
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/VGT/MemberPage/credit">
                            <Redirect to="/VGT/memberPage/credit/creditFromOther"></Redirect>
                        </Route>
                        <Route path="/VGT/memberPage/credit/creditFromOther" component={CreditFromOther}></Route>
                        <Route path="/VGT/memberPage/credit/creditToOther" component={CrediToOther}></Route>
                    </Switch>                                
                </div>
                <br/>
                <br/>
            </BrowserRouter>                            
         );
    }
}
 
export default CreditIndex;
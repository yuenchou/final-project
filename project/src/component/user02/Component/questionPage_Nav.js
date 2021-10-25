import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../css/style.scss"
// import 'bootstrap';

class QuestionNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            
            <nav className="h-100 border border-primary p-2">
                <ul className="h-auto mt-3 d-flex flex-column text-center list-unstyled nav-pills">
                    <li className="nav-items p-2 pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionBuySellTrad">
                            買賣交易流程
                        </NavLink>
                    </li>
                    <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionBuy">
                            付款方式
                        </NavLink>
                    </li>
                    <li className="nav-items pb-5 h4">
                        <NavLink  className="nav-link" to="/VGT/QuestionPage/questionTradeSafe">
                            帳號交易安全
                        </NavLink>
                    </li>
                    {/* <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="">
                            交易申訴
                        </NavLink>
                    </li> */}
                    <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionTradeCancel">
                            申請取消交易
                        </NavLink>
                    </li>
                </ul>
            </nav>
         );
    }
}

export default QuestionNav;
  
    

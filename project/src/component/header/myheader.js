import React, { Component } from 'react';
import Login from '../user01/Component/login';
import logo from '../header/logo.svg';
import '../header/style.css';
import {NavLink} from "react-router-dom";
import '../../component/user04/component/backEnd/vgtNav'
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vgtid: "",
            loginButton: "",
            logoutButton: "d-none"    
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/VgtLogin/login').then(
            (response) => {
                if(response) {
                    this.setState({
                        vgtid: response.data[0].vgtid,
                        loginButton: "d-none",
                        logoutButton: ""
                    });
                    
                }
            }
        )
    }

    render() { 
        return (             
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/VGT/FrontPage">
                            <img src={logo} alt="Logo" className="logo"/>
                        </NavLink>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nbr-link" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        會員中心
                                    </a>
                                
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/profile">個人檔案</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/storeValue">儲值中心</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/buyerInfo">我是買家</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/sellerInfo">我是賣家</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/credit">信用評價</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/customerService">客服中心</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/ProductPutonPage">刊登商品</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/vgt/vgtPages">管理中心</NavLink>
                                        </li>
                                        
                                    </ul>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nbr-link" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        新手上路
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionBuySellTrad">買賣交易流程</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionBuy">付款方式</NavLink>
                                            
                                        </li>
                                        {/* <li><a className="dropdown-item" href="#">賣家出售申請</a></li> */}

                                    </ul>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nbr-link" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        售後服務
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink  className="dropdown-item" to="/VGT/QuestionPage/questionTradeSafe">
                                            帳號交易安全</NavLink>
                                        </li>
                                        {/* <li><a className="dropdown-item" href="#">交易申訴</a></li> */}
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionTradeCancel">申請取消交易</NavLink>
                                        </li>

                                    </ul>
                                </li>
                                
                                <li className={`nav-item ps-md-2 ${this.state.loginButton}`}>
                                    <button className="btn btn-project" data-bs-toggle="modal" data-bs-target="#loginModal">登入/註冊</button>
                                </li>
                                  
                                <li className={`nav-item ps-md-2 ${this.state.logoutButton}`} >
                                    <button className="btn btn-project">登出</button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav> 
                <Login/>                
            </div>
                       
        );
    }
}
 
export default Header;
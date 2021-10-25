import React, { Component } from 'react';
import {BrowserRouter, NavLink } from 'react-router-dom';
import Canvas from '../Component/canvasTest';
import axios from 'axios';

import '../css/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginStatus: false
        }
    };

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:3000/VgtLogin/login").then((response) => {
            if(response.data.loggedInd == true) {
                console.log(response);
                this.setState({loginStatus: response.data.user[0].username});
            }    
        })
    }

    loginVGT = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/VgtLogin/login", {
            username: this.state.username,
            password: this.state.password
        }).then((response) => {
            if(!response.data.message){
                this.setState({loginStatus: false});
            } else {
                this.setState({loginStatus: true});
            }       
        });
    };

    loginButton = () => {
        window.location.reload();
        // window.location.href = 'http://localhost:8000/VGT/FrontPage';
    }

    
    render() {
        return (
            <BrowserRouter>
            <div className="container">
                <form method="POST" action="http://localhost:3000/VgtLogin/login" onSubmit={this.loginVGT} className="form-horizontal col-sm-offset-3 col-md-offset-3" id="loginForm">
                    <div className="modal fade form row" id="loginModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="form-title">登入</h3>

                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <input type="text" 
                                               className="account1 form-control required" 
                                               placeholder="請輸入帳號名稱"
                                               name="userName" 
                                               onChange={(e) => {this.setState({username: e.target.value})}}
                                               required
                                        />
                                        <span className="checkmark"></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" 
                                               className="password1 form-control required" 
                                               placeholder="請輸入您設定的密碼"
                                               name="password"
                                               onChange={(e) => {this.setState({password: e.target.value})}}
                                               required
                                        />
                                        <span className="checkmark"></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" id="Text3" className="form-control txtCode" placeholder="請輸入圖形驗證碼"
                                            name="captcha" required/>
                                        <span className="error checkmark" id="yesNo"></span>
                                        <br /><span><Canvas/></span>
                                    </div>
                                    <button type="submit" className="btn loginbtn" onClick={this.loginButton}> 登入 </button>
                                </div>
                                <div className="modal-footer">
                                    <div className="signup">
                                        <span className="text-mycolor">還沒加入會員?點這裡 <NavLink to="/VGT/Register" >免費註冊</NavLink></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>              
            </BrowserRouter>

        )
        
    }
}

export default Login;
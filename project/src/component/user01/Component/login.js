import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Canvas from '../Component/canvasTest';
import '../css/login.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            auth:1,
            // loginStatus: false,
            
        }
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:3000/VgtLogin/login").then((response) => {
            if(response.data.loggedId == true) {
                console.log(response);
                this.setState({
                    loginStatus: response.data.user[0].account
                });
            }    
        })
    }

    submitNewLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/VgtLogin/login", {
            account: this.state.account,
            password: this.state.password
        }).then((response) => {
            // if(!response.data.message){
            //     this.setState({loginStatus: false});
            // } else {
            //     this.setState({loginStatus: true});
            // };

            if (response.data[0].auth === 1) {
                this.setState({
                    vgtid: response.data[0].vgtid,
                });
                window.location.reload()
            }else if(response.data[0].auth === 2){
                this.setState({
                    vgtid: response.data[0].vgtid,
                    // auth:2
                })
                window.location.href = 'http://localhost:8000/vgt/vgtMember';
        }});
    };
    

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <form className="form-horizontal col-sm-offset-3 col-md-offset-3" id="loginForm" method="POST" action="http://localhost:3000/VgtLogin/login" onSubmit={this.submitNewLogin}>
                        <div className="modal fade form row" id="loginModal">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="form-title">??????</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input type="text" className="account1 form-control" required placeholder="?????????????????????"
                                                name="account" onChange={(e) => {this.setState({account: e.target.value})}}/><span className="checkmark"></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="password1 form-control" required placeholder="???????????????????????????"
                                                name="password" onChange={(e) => {this.setState({password: e.target.value})}}/>
                                            <span className="checkmark"></span>
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" id="Text3" className="form-control txtCode" required placeholder="????????????????????????"
                                                name="captcha" />
                                            <span className="error checkmark" id="yesNo"></span>
                                            <br /><span><Canvas /></span>
                                        </div>
                                        <button type="submit" className="btn loginbtn"> ?????? </button>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="signup">
                                            <span className="text-mycolor">???????????????????????????? <a href="http://localhost:8000/VGT/Register" >????????????</a></span>
                                            {/* <span className="text-mycolor">???????????????????????????? <button onClick={()=>{window.location.href="http://localhost:8000/VGT/Register"}} >????????????</button></span> */}
                                            {/* <span className="text-mycolor">???????????????????????????? <NavLink to="/VGT/Register" >????????????</NavLink></span> */}
                                        </div>
                                    </div>
                                    {/* <h1 onChange={this.newLogin}>123</h1> */}
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
import React, { Component } from 'react';
import axios from "axios";
// import bcrypt from 'bcrypt';
class Password extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            memberData:{
                "vgtid":"",
                "password":"",                              
            },
            pwdValid:"hidden",
            newPWD:"true",
            newpwdValid:"hidden",
            pwdDoublecheck:"true",
            pwdDOUBLEcheckValid:"hidden",
            btnStatus:"true",
            show:"顯示",
            finalPWD:""
        };
    }
    
    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:3000/Vgt/vgtserver/member/1')
             .then((res) => {                
                this.setState({memberData:res.data});
             })
             .catch((err) => {
                 console.log(err);
             } )
        
    }

    changePWD = (e) => {
        // this.state.memberData.password = e.target.value; 
        // this.setState({});
        // console.log(e.target.value); 
    }

    checkPWD = (e) => {
        if ( e.target.value != this.state.memberData.password) {
            this.state.pwdValid = "visible"
            
        } else {
            this.state.pwdValid = "hidden"
            this.state.newPWD = ""
            this.state.pwdDoublecheck =""
        }
        this.setState({});
    }
   
    setNEWpwd = (e) => {
        var Regexp = /^[a-zA-Z0-9]{10,}$/;
        var result = Regexp.test(e.target.value);
        if (result != true) {
            this.state.newpwdValid = "visible"
            this.state.btnStatus = "true"
        } else {
            this.state.newpwdValid = "hidden"
            this.state.finalPWD = e.target.value;
            // console.log(this.state.finalPWD)
        }
        this.setState({})
    }

    newPWDlastcheck = (e) => {
        if (e.target.value != this.state.finalPWD) {
            this.state.pwdDOUBLEcheckValid = "visible"
            this.state.btnStatus = "true"
        } else {
            this.state.pwdDOUBLEcheckValid = "hidden"
            this.state.finalPWD = e.target.value
            this.state.btnStatus = ""
        }
        this.setState({})
    }

    editClick = (e) => {
        // console.log("OK"); 
        e.preventDefault();
        axios.put(`http://localhost:3000/Vgt/vgtserver/member/chpwd`,{
            // vgtid:this.state.memberData.vgtid,            
            password: this.state.finalPWD
        })
        .then(res => console.log(res));
        // this.setState({});    
    }

    render() { 
        var memberData = this.state.memberData;
        console.log(this.state.memberData.password);
        return (             
            <div className="container d-flex flex-row justify-content-center mt-5">
                <div className=" w-75">
                    <form className="mt-5">
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted fs-5 me-5">使用者帳號：</div>
                            <div className="fs-5 ms-5 ps-5">{memberData.account}</div>
                        </div>
                        <div className="d-flex flex-row mb-4" style={{ height:'50px' }}>
                            <label className="text-muted form-label fs-5 me-5 mt-1" htmlFor="memberPWDold">舊會員密碼：</label>
                            <input onChange={this.changePWD} onBlur={this.checkPWD} type="password"
                            className="h-50 w-25 ms-4 mt-1 form-control form-control-sm text-center" id="memberPWDold"></input>
                            {/* <div className="btn ms-3" style={{ height:'36px', marginTop:'2px' }}>{this.state.show}</div> */}
                            <span className="text-danger ps-3 align-self-center" style={{ visibility:`${this.state.pwdValid}`, marginBottom:'9px'}}>與舊密碼不符，請重新輸入</span>
                        </div>
                        <div className="d-flex flex-row mb-4">   
                            <label className="text-muted form-label fs-5 me-5 " htmlFor="memberPWD">新會員密碼：</label>
                            <input onBlur={this.setNEWpwd} disabled={this.state.newPWD} type="password" 
                            className="h-50 w-25 form-control form-control-sm text-center ms-4" id="memberPWD" required ></input>
                            <span className="text-danger ps-3  align-self-center" style={{ visibility:`${this.state.newpwdValid}`, width:"300px"}}>格式不符(密碼長度應為10個字元以上，只能輸入英數字)</span>
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <label className="text-muted form-label fs-5 me-3" htmlFor="memberPWDnew">再輸入一次新密碼：</label>
                            <input disabled={this.state.pwdDoublecheck} onBlur={this.newPWDlastcheck} type="password"
                            className="h-50 w-25 form-control form-control-sm text-center" id="memberPWDnew"  style={{ marginLeft:"-4px"}} ></input>
                            <span className="text-danger ps-3 align-self-center" style={{ visibility:`${this.state.pwdDOUBLEcheckValid}` }} >新會員密碼不一致，請重新填寫</span>                                    
                        </div>
                    </form>
                    <div className="d-flex justify-content-center mt-5">                                                                                            
                        <button className="btn mt-5" disabled={this.state.btnStatus} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            確認修改
                        </button>
                    </div>
                    <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content bg-white">
                                <div className="modal-header">
                                    <h5 className="modal-title fw-bold" id="exampleModalLabel">密碼修改</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex justify-content-center fs-5">
                                    <span>確認修改密碼嗎？</span>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={this.editClick} type="button" className="btn btn-project" data-bs-dismiss="modal">確認</button>
                                    <button type="button" className="btn btn-project" data-bs-dismiss="modal">取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Password;
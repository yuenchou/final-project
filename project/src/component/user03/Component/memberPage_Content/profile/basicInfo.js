import React, { Component} from 'react';
import IMG from './imgViewer';
import axios from "axios";
import date from 'date-and-time';


class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           userid:1,
           memberData:{
                "vgtid":"",
                "trueid":"",
                "account":"",               
                "vgtname":"",                             
                "truename":"",               
                "birthdate":"",              
                "email":"",               
                "phone":"",               
                "gender":"",               
           }, 
           vgtnameValid:"hidden",
           phoneValid:"hidden",
           emailValid:"hidden",
           btnStatus:"",
        };
    }
    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:3000/Vgt/vgtserver/member/19')
             .then((res) => {                
                this.setState({memberData:res.data});
             })
             .catch((err) => {
                 console.log(err);
             });      
    }

    memberNamechange = (e) => {
        this.state.memberData.vgtname = e.target.value;
        this.setState({});
    }

    memberNameBlur = (e) => {
        if (e.target.value == ""){
            this.state.vgtnameValid = "visible"
            // this.state.btnStatus = "true"

        } else  {
            this.state.vgtnameValid = "hidden"
        } 
        this.setState({});       
    }

    emailchange = (e) => {
        this.state.memberData.email = e.target.value; 
        this.setState({});
    }

    emailBlur = (e) => {
        var Regexp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        var result = Regexp.test(e.target.value);
        if (result !== true){
            this.state.emailValid = "visible"
            // this.state.btnStatus = "true"
        } else {
            this.state.emailValid = "hidden"
        }
        this.setState({});
    }

    phonechange = (e) => {
        this.state.memberData.phone = e.target.value; 
        this.setState({});
       
    }

    phoneBlur = (e) => {
        var Regexp = /^[0][9]\d{8}$/;
        var result = Regexp.test(e.target.value);
        if (result !== true){
            this.state.phoneValid = "visible"
            // this.state.btnStatus = "true"
        } else {
            this.state.phoneValid = "hidden"
        }
        this.setState({});
    }
    
    genderchange = () => {     
        var gender = this.state.memberData.trueid.substring(2, 1); 
        gender == 1 ? gender = '男性': gender = '女性';
        return gender
    }
          
    editClick = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/Vgt/vgtserver/member/chinfo`,{
            // vgtid:this.state.memberData.vgtid,
            // birthdate: this.state.memberData.birthdate,
            vgtname: this.state.memberData.vgtname,
            truename: this.state.memberData.truename,
            email:this.state.memberData.email,
            phone:this.state.memberData.phone,  
        
        })
        .then(res => console.log(res));          
    }
    
    render() { 
        var memberData = this.state.memberData;
        var birthDate =   date.format(new Date(memberData.birthdate), 'YYYY-MM-DD').toString();
        var checkarray = [this.state.phoneValid, this.state.emailValid, this.state.vgtnameValid];

        return (
            <div className="row container d-flex flex-row mt-3">
                <div className=" col-8 mt-4 border-right border-primary">
                    <form id="memberDataForm" name="memberDataForm" >                     
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted fs-5 mr-2">使用者帳號：</div>
                            <div className="fs-5">  
                                {memberData.account}                         
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted fs-5 mr-2">身分證字號：</div>
                            <div className="fs-5">  
                                {memberData.trueid}                         
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-4">   
                            <div className="text-muted">
                                <label className="form-label fs-5 me-5" htmlFor="memberTrueName">姓名：</label>
                            </div>
                            <div>
                            <span id="memberTrueName" className="fs-5 ms-2">{memberData.truename}</span>
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-4">   
                            <div className="text-muted">
                                <label className="form-label fs-5 me-2" htmlFor="memberName">會員名稱：</label>
                            </div>
                            <div>
                                <input value={memberData.vgtname} onChange={ this.memberNamechange} onBlur={this.memberNameBlur}
                                       id="memberName" className="form-control form-control-sm text-center w-75" type="text" placeholder="請輸入姓名" />                            
                            </div>
                            <div className="pt-1 text-danger" style={{visibility: `${this.state.vgtnameValid}`, marginLeft:"130px" }} >不可為空白，請重新輸入</div>
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted">
                                <label className="form-label fs-5 me-5" htmlFor="memberPhone">電話：</label>
                            </div>
                            <div>
                                <input value={memberData.phone} onChange={ this.phonechange} onBlur={this.phoneBlur} 
                                id="memberPhone" className="form-control form-control-sm text-center w-75" placeholder="請輸入電話號碼"/>                                 
                            </div>
                            <div className="pt-1 text-danger" style={{visibility: `${this.state.phoneValid}`, marginLeft:"130px" }} >請輸入10碼電話格式</div>
                        </div>
                        <div className="d-flex flex-row mb-4 me-3">
                            <div className="text-muted">
                                <label className="form-label fs-5 me-4" htmlFor="memberMail">Email：</label>
                            </div>
                            <div>
                                <input value={memberData.email} onChange={ this.emailchange} onBlur={this.emailBlur}  
                                id="memberMail" className="form-control form-control-sm text-center ms-3" style={{ width:"255px" }} type="email" placeholder="請輸入信箱"/>
                            </div>
                            <div className="pt-1 text-danger" style={{visibility: `${this.state.emailValid}`, marginLeft:"46px" }} >不符合信箱格式，請重新輸入</div>
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted fs-5 me-5">性別：</div>
                            <div>
                                <span id="gender" className="fs-5" >{this.genderchange()}</span>                                             
                            </div>
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <div className="text-muted fs-5 me-5">生日：</div>
                            <div className="d-flex">
                                <div className="me-3 mt-1 text-center">{birthDate}</div>
                            </div>
                        </div>
                    </form>
                    <div className="w-100 d-flex justify-content-center ">
                        <button className="btn mt-2" 
                        disabled={checkarray.includes("visible")? "true": ""}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            儲存
                        </button>
                    </div>                        
                </div>
                
                <div className="col-4 d-flex flex-column justify-content-center">
                    <IMG/>                   
                </div>
                {/* 對話框 */}
                <div className="modal fade" id="exampleModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content bg-white">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="exampleModalLabel">資料修改</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex justify-content-center fs-5">
                                <span>確認修改資料嗎？</span>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.editClick} type="button" className="btn btn-project" data-bs-dismiss="modal">確認</button>
                                <button type="button" className="btn btn-project" data-bs-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>            
        );
    }
}
 
export default BasicInfo;
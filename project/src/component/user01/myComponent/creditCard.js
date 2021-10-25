import React, { Component } from 'react';
import '../css/creditCard.css';
import mastercard from '../img/mastercard.png';
import visa from '../img/visa.png';
import jcb from '../img/jcb.png'; 
class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="card-top border-bottom text-center"></div>
                <div className="card-body">
                    <br />
                    <div className="row m-0">
                        <div className="col-md-7">
                            <div className="left">
                                <div className="row m-0"> <span className="header">Payment</span>
                                    <div className="icons">
                                        <img src={ visa } />
                                        <img src={ mastercard} />
                                        <img src={ jcb } />
                                    </div>
                                </div>
                                <form className="mt-3">
                                    <span className="spanText">持卡人姓名：</span>
                                    <input placeholder="WANG DAMING" />
                                    <span className="spanText">信用卡卡號：</span>
                                    <input placeholder="#### #### #### ####" />
                                    <div className="row m-0">
                                        <div className="col-4"><span className="spanText">卡片有效期限：</span> <input placeholder=" YY / MM" /> </div>
                                        <div className="col-4"><span className="spanText">信用卡安全碼: </span> <input id="cvv" placeholder="cvv" /> </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right">
                                <div className="header">儲值金額</div>
                                <hr />
                                <div className="row lower">
                                    <div className="col text-start">VGT</div>
                                    <div className="col text-end"><p id="vgtPoint"></p></div>
                                </div>
                                <div className="row lower">
                                    <div className="col text-start"><b>實際付款金額</b></div>
                                    <div className="col text-end"><b id="vgtNt"></b></div>
                                </div>
                                <div className="row lower">
                                <button className="btn mBtn" >立即付款</button>
                                {/* data-bs-toggle="modal" data-bs-target="#payModal" */}
                                <p className="text-muted text-center">儲值成功後恕無法退款</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreditCard;
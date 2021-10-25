import React, { Component } from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import '../footer/style.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <footer className="text-white  w-100 bg-project">
                                      
                    <div className="col-12 mb-1 text-center">
                    <h5 className="text-uppercase py-3">客戶服務</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p className="text-white">                                    
                                            <FaPhoneAlt/>
                                            客服電話：XXXX                                  
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-white">服務時間：週一至週五10:00-21:00</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p className="text-white"><FaTools/>例行維護：每日4:30-5:00</p>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white footer-list"><GrMail/>客服信箱</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-white" href="#">Virtual Goods Trade.com</a>
                    </div>

                </footer>
            </React.Fragment>   
         );
    }
}
 
export default Footer;
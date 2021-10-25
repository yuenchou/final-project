import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/storedValue.css';
import axios from 'axios';


class StoredValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vgtpoint:0,
            vgtinput:0,
        }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/VgtCreditCard/storedValue/${this.props.match.params.vgtid}`).then(
            (response) => {
            this.setState({
                vgtpoint:response.data[0].vgtpoint
            })
        });
    }

    // submitStoredValue = (e) => {
    //     axios.post('http://localhost:3030/storedValue', {
    //         vgtid: this.state.vgtid,
    //         vgtpoint:this.state.vgtpoint,
    //         vgtinput: this.state.vgtinput,
            
    //     });
    // };


    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="titleDiv">
                    <h3 className="formTitle">VGT幣儲值中心</h3>
                </div>
                <div className="container">
                    <div className="text-center" >
                        <h4>目前VGT幣餘額：{this.state.vgtpoint}</h4>
                    </div>
                    <h4 className="h3Margin">1.請選擇付款方式</h4>
                    <div className="selectDiv col-md-8">
                        <select className="form-select" aria-label="Default select example">
                            <option className="a" selected>信用卡</option>
                        </select>
                    </div>
                    <h4 className="h3Margin">2.選擇儲值點數</h4>
                    <div className="radioDiv col-md-8">
                        <div className="item">
                            <input type="radio" id="140p" name="pointID" value="100" onClick={(e)=>{this.setState({vgtinput:e.target.value})}}/><label htmlFor="140p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;140<span className="ms-6">NT$&nbsp;&nbsp;&nbsp;&nbsp;100</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="350p" name="pointID" value="250" onClick={(e)=>{this.setState({vgtinput:e.target.value})}}/><label htmlFor="350p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;350<span className="ms-6">NT$&nbsp;&nbsp;&nbsp;&nbsp;250</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="700p" name="pointID" value="500" onClick={(e)=>{this.setState({vgtinput:e.target.value})}}/><label htmlFor="700p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;700<span className="ms-6">NT$&nbsp;&nbsp;&nbsp;&nbsp;500</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="1400p" name="pointID" value="1000" onClick={(e)=>{this.setState({vgtinput:e.target.value})}}/><label htmlFor="1400p" className="price">VGT幣
                                &times;&nbsp;1,400<span className="ms-6">NT$&nbsp;&nbsp;1,000</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="3500p" name="pointID" value="2500" onClick={(e)=>{this.setState({vgtinput:e.target.value})}}/><label htmlFor="3500p" className="price">VGT幣
                                &times;&nbsp;3,500<span className="ms-6">NT$&nbsp;&nbsp;2,500</span></label>
                        </div>
                    </div>
                </div>

                <div className="btnDiv">
                    <NavLink to={`/VGT/creditCardPage/${this.state.vgtinput}`} className="aText"><button type="submit" className="btn myBtn" id="submitBtn"
                        >儲值VGT幣</button></NavLink>
                </div>
            </div>

        )
    }
}

export default StoredValue;
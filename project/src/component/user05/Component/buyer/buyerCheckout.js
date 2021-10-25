import React, { Component } from 'react';
import '../../css/myStyle05.css';
import axios from 'axios';
import BuyerCheckoutpointBtn from './buyerCheckoutpointbtn';
import BuyerCheckoutStorepoint from './buyerCheckoutstorepoint';

class BuyerCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyerinfo: [],
            buyerdiscount: [],
            selecteddiscount: 0,
            carttotal: []
        }
    }

    componentDidMount() {
        // 依sessionid抓取買家資料
        axios.get(`http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/${this.props.userid}`).then(
            res => this.setState({ buyerinfo: res.data })
        ).catch(
            err => console.log(err)
        )

        // 依sessionid 抓取商品折扣資料
        axios.get(`http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerdiscount/${this.props.userid}`).then(
            res => this.setState({ buyerdiscount: res.data })
        ).catch(
            err => console.log(err)
        )

        // 所有訂單總金額抓不到只好重新get一次資料再setState
        axios.get(`http://localhost:3000/VGT/memberPage/buyer/tradecart/${this.props.userid}`).then(
            (response) =>
                this.setState({
                    carttotal: response.data.map((data) =>
                        data.productprice * data.cartnum)
                }),
        ).catch(
            err => console.log(err)
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 實際要與銀行端判斷信用卡卡號、到期日、信用卡安全碼是否正確

        // 生成訂單
        var myorder = this.props.cartinfo;
        myorder.map((cartdata) => {
            var data = {
                buyerid: cartdata.cartvgtid,
                orderprice: cartdata.productprice * cartdata.cartnum,
                productid: cartdata.productid,
                creditcardid: this.creditcardid
            }

            // 依購物車選取的金額生成訂單(信用卡)
            axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/createorder', data).then(
                res => console.log(res),
            ).catch(
                err => console.log(err)
            )

            // 清除購物車內資訊
            axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/clearcart', data).then(
                res => console.log(res),
            ).catch(
                err => console.log(err)
            );
        })

        // 新增信用卡資料至DB
        var paymentdata = {
            vgtid: this.props.userid,
            creditcardid: this.creditcardid,
            creditcardname: this.creditcardname,
            total: eval(this.state.carttotal.join('+')),
            discount: this.state.selecteddiscount
        }
        axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/creditcardinfo', paymentdata).then(
            res => console.log(res)
        ).catch(
            err => console.log(err)
        )

        // 將商品折扣序號改為已使用
        var discountdata = {
            vgtid: this.props.userid,
            discount: this.state.selecteddiscount
        }
        axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/discountuse', discountdata).then(
            res => console.log(res)
        ).catch(
            err => console.log(err)
        )
        
        window.location.replace('/VGT/memberPage/buyerInfo/tradeOrder')
    }

    discountChange(e) {
        this.setState({
            selecteddiscount: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-4 border border-dark w-75">
                <h3 className="title font-weight-bold sh-25 mt-3 p-2 overflow-ellipsis text-truncate">
                    付款資訊
                </h3>
                <div className="w-100">
                    {this.state.buyerinfo.map((info) =>
                        <div>
                            <div>
                                <div key={info.vgtid} className="mt-1 p-2 myContent">買家編號: No. {(info.vgtid).toString().padStart(7, '0')}</div>
                                <div key={info.truename} className="mt-1 p-2 myContent">姓名: {info.truename}</div>
                            </div>
                            {/* 有bug沒解決 => 若折扣金額有重複 怎解? */}
                            <div className="d-flex flex-row justify-content-between">
                                <div className="mt-1 p-2 myContent">
                                    商品折扣
                                </div>
                                <select name="cartDiscount" onChange={(e) => this.discountChange(e)}>
                                    <option value="0"></option>
                                    {this.state.buyerdiscount.map((discount) =>
                                        <option value={discount.discountprice}>{discount.discountid}, ${discount.discountprice}</option>
                                    )}
                                </select>
                            </div>
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div className="mt-1 p-2 font-weight-bold myContent">
                                    總計金額
                                </div>
                                <div className="mr-0 py-2 border-bottom border-secondary">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="price">
                                        $ {eval(this.state.carttotal.join('+')) - this.state.selecteddiscount}
                                    </span>
                                </div>
                            </div>
                            <br />
                            <h4 className="mt-4 p-2 myContent font-weight-bold">餘額付款</h4>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="p-2 myContent">
                                    帳戶餘額
                                </div>
                                <div className="p-2">
                                    $ &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="price">
                                        {info.vgtpoint}
                                    </span>
                                </div>
                            </div>
                            {(info.vgtpoint > eval(this.state.carttotal.join('+')) - this.state.selecteddiscount) ?
                                <BuyerCheckoutpointBtn cartinfo={this.props.cartinfo} 
                                selecteddiscount={this.state.selecteddiscount} 
                                buyerinfo={this.state.buyerinfo} 
                                ordertotal={eval(this.state.carttotal.join('+'))} />  
                                :   <BuyerCheckoutStorepoint />}
                        </div>
                    )}
                    <div className="mt-4 p-2">
                        <h4 className="myContent font-weight-bold">信用卡付款</h4>
                        <form onSubmit={this.handleSubmit} className="my-4 d-flex flex-row justify-content-between" method="post">
                            <div className="col-4 d-flex flex-column ">
                                <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="持卡人姓名" name="creditcardname" required
                                    onChange={(e) => this.creditcardname = e.target.value} />
                                <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="信用卡卡號" name="creditcardid" required
                                    onChange={(e) => this.creditcardid = e.target.value} />
                                <div className="">
                                    <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="卡片到期日" required />
                                    <input type="password" className="my-1 form-control" id="inputPassword2" placeholder="信用卡安全碼" required />
                                </div>
                            </div>
                            <div className="ml-auto mt-auto">
                                <button type="submit" className="btn">確認付款</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyerCheckout;
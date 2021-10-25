import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TradeSellTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 1,
            orderlist: []
        }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/Vgt/memberPage/sellerInfo/tradeTransfer/${this.state.userid}`).then(
            res=> this.setState({orderlist: res.data})
        ).catch(
            err=> console.log(err)
        )
    }

    render() {
        return (
            <React.Fragment>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">訂單編號</th>
                            <th scope="col">商品標題</th>
                            <th scope="col">商品價格</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.orderlist.map((order, index) => (
                            <tr key={index}>
                                <th key={order.orderid} scope="row">No. {(order.orderid).toString().padStart(7, '0')}</th>
                                <td key={order.producttitle}><NavLink exact to={`/VGT/memberPage/seller/tradetransfer/${order.orderid}`} className="text-decoration-none mx-3" target="_blank">{order.producttitle}</NavLink></td>
                                <td key={order.orderprice}>$ {order.orderprice}</td>
                                <td className="d-flex justify-content-center">
                                    <a className="btn">取消交易</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default TradeSellTransfer;
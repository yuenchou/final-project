import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

class TradeBuyCartDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" checked={this.props.allChecked}
                                onChange={(e) => { this.props.allCheck() }} />&nbsp;&nbsp;全選</th>
                            <th scope="col">商品編號</th>
                            <th scope="col">商品標題</th>
                            <th scope="col">單價</th>
                            <th scope="col">商品數量</th>
                            <th scope="col">商品價格</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productInfo.map((product, index) => {
                            return (<tr style={{ lineHeight: "40px" }}>
                                <td><input type="checkbox" checked={product.checked}
                                    onChange={(e) => (this.props.singleCheck(index))} /></td>
                                <td key={product.orderid}>No. {(product.productid).toString().padStart(7, '0')}</td>
                                <td key={product.producttitle} className="overflow-ellipsis text-truncate" >{product.producttitle}</td>
                                <td key={product.productprice}>$ {product.productprice}</td>
                                <td key={index + 1} style={{ width: "200px" }}>
                                    <button disabled={product.cartnum === 1 ? true : false}
                                        onClick={() => { this.props.mulNum(index) }}
                                        className="btn">
                                        -
                                    </button>
                                    <span>
                                        &nbsp;&nbsp; {product.cartnum} &nbsp;&nbsp;
                                    </span>
                                    <button disabled={product.cartnum >= product.productquant ? true : false}
                                        onClick={() => { this.props.addNum(index) }}
                                        className="btn">
                                        +
                                    </button>
                                </td>
                                <td>$ {product.productprice * product.cartnum}</td>
                                <td className="d-flex justify-content-center" style={{ lineHeight: "40px" }}>
                                    <button className="btn bg-danger b-none">刪除</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </BrowserRouter>
        );
    }
}

export default TradeBuyCartDetail;


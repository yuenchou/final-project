import React, { Component } from 'react';
import '../../css/myStyle05.css';


class BuyerCart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 d-flex flex-row w-75" style={{ height: "30px", lineHeight: "30px" }}>
                    <div className="title col text-center border-right border-secondary bg-warning">
                        交易流程一
                    </div>
                    <div className="title col text-center border-right border-secondary">
                        交易流程二
                    </div>
                    <div className="title col text-center border-right border-secondary">
                        交易流程三
                    </div>
                    <div className="title col text-center">
                        交易流程四
                    </div>
                </div>
                <div className="mt-5">
                    {this.props.cartinfo.map((product) =>
                        <div className="container mt-3 border border-dark w-75" >
                            <div className="d-flex flex-row justify-content-between">
                                <h3 className="title font-weight-bold h-25 mt-3 p-2 overflow-ellipsis text-truncate">
                                    {product.producttitle}
                                </h3>
                            </div>
                            <div>
                                <div key={product.productid} className="mt-1 px-2 py-1 myContent">商品編號: No. {(product.productid).toString().padStart(7, '0')}</div>
                                <div key={product.vgtid} className="mt-1 px-2 py-1 myContent">賣家編號: No. {(product.vgtid).toString().padStart(7, '0')}</div>
                                <div key={product.gamelist} className="mt-1 px-2 py-1 myContent">遊戲名稱: {product.gamelist}</div>
                                <div className="d-flex flex-row justify-content-between mt-1">
                                    <div key={product.cartnum} className="px-2 py-1 myContent">購買數量: {product.cartnum}</div>
                                    <div className="mr-0 py-2 border-bottom border-secondary mb-1"> &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="price">
                                            $ {product.productprice * product.cartnum}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment >
        );
    }
}

export default BuyerCart;
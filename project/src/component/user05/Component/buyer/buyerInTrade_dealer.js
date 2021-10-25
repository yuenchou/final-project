import React, { Component } from 'react';
import '../../css/myStyle05.css';

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-5 d-flex flex-row w-75" style={{ height: "30px", lineHeight: "30px" }}>
                    <div className="title col text-center border-right border-secondary">
                        交易流程一
                    </div>
                    <div className="title col text-center border-right border-secondary bg-warning ">
                        交易流程二
                    </div>
                    <div className="title col text-center border-right border-secondary">
                        交易流程三
                    </div>
                    <div className="title col text-center">
                        交易流程四
                    </div>
                </div>

                <div className="container mt-5 border border-dark w-75" style={{ height: "325px" }}>
                    <h2 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                        確認交易資料
                    </h2>
                    {this.props.productinfo.map((product, index) => (
                        <div className="m-5 bg-light">
                            <div key={product.producttitle} className="mt-3 p-2 myContent">商品標題: {product.producttitle}</div>
                            <div key={product.vgtid} className="p-2 myContent">賣家編號: ID. {(product.vgtid).toString().padStart(7, '0')}</div>
                            <div key={product.gamelist} className="p-2 myContent">遊戲名稱: {product.gamelist}</div>
                            <div key={product.productclass} className="p-2 myContent">商品分類: {product.productclass}</div>
                        </div>
                    ))}
                </div>

            </div>

        );
    }
}

export default Dealer;
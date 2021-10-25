import axios from 'axios';
import React, { Component } from 'react';
import '../../css/myStyle05.css';
import Modal from '../../../modal/modal'

class BuyerFinishTrade_state4 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.checked == 'on') {
            var data = {
                ordereval: this.ordereval,
                orderevalcmmt: this.orderevalcmmt,
            }

            axios.post(`http://localhost:3000/Vgt/memberPage/buyer/tradebuyercomplete/${this.props.orderid}/OrderCompleteState`, data).then(
                res =>
                    console.log(res),
                window.location.reload()
            ).catch(
                err => console.log(err)
            )
        } else {
            window.alert('請確認是否已交易商品')
        }
    }

    render() {
        return (

            <div className="d-flex justify-content-center mt-2 p-4" style={{ width: '300px' }}>
                <form onSubmit={this.handleSubmit} method="post">
                    <div className="d-flex flex-row justify-content-between myContent">
                        <div>
                            <input type="radio" value="1" id="eval1" name="eval" onChange={(e) => this.ordereval = e.target.value} /><label for="eval1">正面評價</label>
                        </div>
                        <div>
                            <input type="radio" value="2" id="eval2" name="eval" onChange={(e) => this.ordereval = e.target.value} /><label for="eval2">負面評價</label>
                        </div>
                        <div>
                            <input type="radio" value="0" id="eval0" name="eval" onChange={(e) => this.ordereval = e.target.value} /><label for="eval0">中立評價</label>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-content-center mt-3 ">
                        <input type="text" className="border px-2 py-4" placeholder="請輸入對賣家的評語" style={{ width: "300px", height: "50px" }} onChange={(e) => this.orderevalcmmt = e.target.value} />
                        <div className="mt-2 myContent">
                            <input type="checkbox" className="mt-3" name="confirm" id="confirm" onChange={(e) => this.checked = e.target.value} />
                            <label for="confirm">&nbsp;&nbsp; 已收到賣家的商品</label>
                        </div>
                        <button type="submit" className="btn mx-auto my-3">
                            完成交易及評價
                        </button>
                    </div>
                </form>
            </div>

        );
    };
};

export default BuyerFinishTrade_state4;
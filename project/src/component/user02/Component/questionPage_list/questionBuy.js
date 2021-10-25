import React, { Component } from 'react';
import buyTrad from '../../img/buyTrad.png';


class QuestionBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <div className="container">
                    <h2 className="text-center">付款教學</h2>
                        <h5>付款流程</h5>
                        <hr />
                        <img src={buyTrad} alt="付款流程" className="w-100" />
                        <table className="table table-hover">
                            <thead className="bg-project">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col-1">付款方式</th>
                                    <th scope="col">類型</th>
                                    <th scope="col">手續費</th>
                                    <th scope="col">入帳時間</th>
                                    <th scope="col-6">特點</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <th scope="row">1</th>
                                    <td>信用卡</td>
                                    <td>線上付款</td>
                                    <td>無手續費</td>
                                    <td>無</td>
                                    <td>
                                        <ol>
                                            <li>繳費金額最少50元，最多2萬元</li>
                                            <li>24H可用</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
        );
    }
}
 
export default QuestionBuy;
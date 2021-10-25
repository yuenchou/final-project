import React, { Component } from 'react';
import axios from "axios";
// import date from 'date-and-time';

class CrediToOther extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dealercmmt:[]
            // "dealerid":"",
            // "orderid":"",
            // "dealereval":"",
            // "dealercmt":"",
            // "cmmtdate":""
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3000/Vgt/vgtserver/order/dealercmmt')
             .then((res) => {                
                this.setState({dealercmmt:res.data});
                console.log(res.data);
             })
             .catch((err) => {
                 console.log(err);
             })
    }


    render() { 
        return ( 
            <React.Fragment>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">會員ID(賣家)</th>
                            <th scope="col">訂單編號</th>
                            <th scope="col">評價等級</th>
                            <th scope="col">評價內容</th>
                            <th scope="col">評價日期</th>
                        </tr>
                    </thead>
                    {this.state.dealercmmt.map((val) => 
                    <tbody key={val.orderid}>
                        <tr>
                            <th scope="row">{val.dealerid}</th>
                            <td>{val.dealerid}</td>
                            <td>{val.dealereval}</td>
                            <td>{val.dealercmt}</td>
                            <td>{val.cmmtdate}</td>
                        </tr>                       
                    </tbody>
                    )}
                </table>               
            </React.Fragment>
         );
    }
}
 
export default CrediToOther;
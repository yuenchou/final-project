import React, { Component } from 'react';
import '../../css/myStyle05.css'
import axios from 'axios'

class DealerinsertMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 1
        }
    }

    handeleSubmit = (e) => {
        e.preventDefault();
        var data = {
            orderid: this.props.orderid,
            cmmtid: this.state.userid,
            insertcmmt: this.insertcmmt
        }

        // 從tradeBuyReceive.js的NavLink path 抓取 orderid => this.props.match.params.orderid 
        // 以此為篩選條件從後端SQL撈資料 => 將資料透過props傳給子層
        axios.post(`http://localhost:3000/Vgt/memberPage/seller/tradetransfer/insertcmmt`, data)
            .then(
                (response) => {
                    window.location.reload()
                }).catch(
                    (err) => console.log(err)
                );
    }

    render() {
        return (
            <div className="mt-5 d-flex flex-row justify-content-center">
                <form onSubmit={this.handeleSubmit} method="post">
                    <div className="d-flex flex-column align-content-center">
                        <input type="text" className="border px-2 py-3" name="insertcmmt" placeholder="請輸入留言內容" maxLength="25"
                            style={{ width: "300px", height: "50px" }}
                            onChange={(e) => this.insertcmmt = e.target.value} required/>
                        <button type="submit" className="btn mx-auto my-2">留言</button>
                    </div>
                </form>
            </div>);
    }
}

export default DealerinsertMsg;
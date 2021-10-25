import React, { Component } from 'react';
import '../../css/myStyle05.css'
import axios from 'axios'
import DealerinsertMsg from './dealerinsertMsg'

class DealerMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cmmtinfo: []
        }
    }

    componentDidMount() {
        // 從tradeBuyReceive.js的NavLink path 抓取 orderid => this.props.match.params.orderid 
        // 以此為篩選條件從後端SQL撈資料 => 將資料透過props傳給子層
        axios.get(`http://localhost:3000/Vgt/memberPage/seller/tradetransfer/${this.props.orderid}/cmmt`)
            .then(
                (response) => {
                    this.setState({ cmmtinfo: response.data })
                }).catch(
                    (err) => console.log(err)
                );
    }

    render() {
        console.log(this.state.cmmtinfo)
        return (
            <div className="mt-5 container border border-dark w-75" style={{ height: 'auto' }}>
                <h3 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                    交易留言
                </h3>
                <div className="mt-5 container">
                    {this.state.cmmtinfo.map((cmmt) => (
                        <div className="mt-2 myBorder">
                            <div>
                                <div key={cmmt.cmmtid}>No. {(cmmt.cmmtid).toString().padStart(7, '0')}</div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <div key={cmmt.cmmtdesc} className="mb-1">{cmmt.cmmtdesc}</div>
                                <div key={cmmt.cmmtdate}>{(cmmt.cmmtdate)}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <DealerinsertMsg orderid={this.props.orderid}/>
            </div>
        );
    }
}

export default DealerMsg;
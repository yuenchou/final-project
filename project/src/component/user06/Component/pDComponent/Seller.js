import React from 'react';
import '../../css/myStyle06.css';
import img005 from '../../img/img005.jpeg';

const Seller = ({productItem}) => {

    return (
        <div className="card col-9">
            <div className="card-header">
                <span className="h6">賣家資訊</span>                        
            </div>
            <div className="card-body">
            <blockquote className="blockquote mb-0">
                <div className="row align-items-center">
                    <div className="col-3 ps-5">
                        <img className="thumbnail3" src={img005} alt=""/>
                    </div>
                    <div className="col-3">
                        <span className="mt-3 mb-5">會員暱稱：{productItem.vgtname}</span>
                    </div>
                    <div className="col-3">
                        <span className="mt-3 mb-5">賣家評價：⭐2.3</span>
                    </div>
                    <div className="col-3">
                        <button className="btn">聯絡賣家</button>
                    </div>
                </div>
            </blockquote>
            </div>
        </div>
    )
}

export default Seller
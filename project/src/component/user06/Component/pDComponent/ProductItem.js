import React, { useState } from 'react';
import '../../css/myStyle06.css';
import { NavLink } from "react-router-dom";


const ProductItem = ({productItem}) => {

    const [purchaseQuant, setPurchaseQuant] = useState(1);

    return (
        <div className="col-5 ms-5 pt-3">
            <h5>{productItem.producttitle}</h5>
            <div className="h5 mt-5 pricebg w-75 p-3 ps-4 rounded">
                <span style={{fontSize: '16px', color: '#495057'}}>價格：</span>
                <span style={{fontSize: '30px', color: '#d90429'}}>${productItem.productprice}</span>
               
            </div>
            <p className="mt-5">遊戲伺服：{productItem.gamelist} - {productItem.gameserver}</p>
            <p className="mt-4">商品種類：{productItem.productclass}</p>
            <p className="mt-4">
                <span>購買數量：</span>
                <input type="number" value={purchaseQuant} min={0} max={productItem.productquant} step={1} onChange={e => setPurchaseQuant(e.target.value)}/>
                <span>（ 庫存：{productItem.productquant} ）</span>
            </p>
            <NavLink to="/VGT/memberPage/buyerInfo/tradeCart"><button className="mybtn btn-danger mt-4 ps-5 pe-5">立即購買</button></NavLink>
            <button type="button" className="mybtn btn-outline-secondary mt-4 ms-4">加入購物車</button>
        </div>
    )
}

export default ProductItem
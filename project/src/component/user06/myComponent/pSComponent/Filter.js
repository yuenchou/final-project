import React, { useState } from 'react';
// import {NavLink} from "react-router-dom";
import axios from 'axios';


const Filter = () => {

    const [ priceRange1, setPriceRange1 ] = useState(0);
    const [ priceRange2, setPriceRange2 ] = useState(10000);
    const [ datefilter1, setDateFilter1 ] = useState("");
    const [ datefilter2, setDateFilter2 ] = useState("");

    const filiterButton = () => {
        axios.post('http://localhost:3000/VgtSearch/filter'
        ,{
            priceRange1: priceRange1,
            priceRange2: priceRange2,
            datefilter1: datefilter1,
            datefilter2: datefilter2,
        }).then(() => {
            setPriceRange1(0);
            setPriceRange2(10000);
            setDateFilter1("");
            setDateFilter2("");
            window.location.href = 'http://localhost:8000/VGT/ProductSearchPage';
        }
        )
    }

    return (
        <div className="col-3 ms-5">
                        <h4><span className="badge rounded-pill primebg">條件篩選</span></h4>
                        <form>
                            {/* <div className="form-group col-10">
                                <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="遊        戲" />
                                <datalist id="datalistOptions1">
                                    <option value="楓之谷" />
                                    <option value="英雄聯盟" />
                                    <option value="APEX 英雄" />
                                </datalist>
                            </div>
                            <div className="form-group col-10 mt-4">
                                <input className="form-control" list="datalistOptions2" id="exampleDataList2" placeholder="伺  服  器" />
                                <datalist id="datalistOptions2">
                                    <option value="艾麗亞" />
                                    <option value="普力特" />
                                    <option value="優伊娜" />
                                </datalist>
                            </div> */}
                            {/* <div className="form-group col-10 mt-4">
                                <input className="form-control" list="datalistOptions3" id="exampleDataList3" placeholder="商品種類" />
                                <datalist id="datalistOptions3">
                                    <option value="道具" />
                                    <option value="帳號" />
                                    <option value="點數卡" />
                                </datalist>
                            </div> */}
                            <div className="form-group mt-4 mb-5">
                                <p>價格</p>
                                <div className="range-slider">
                                    <span className="rangeValues">
                                        ${(priceRange1 > priceRange2) ? priceRange2 : priceRange1}
                                        -
                                        ${(priceRange1 > priceRange2) ? priceRange1 : priceRange2}
                                    </span>
                                    <input value={priceRange1} min={0} max={10000} step={100} type="range" onChange={(e) => {setPriceRange1(e.target.value)}}/>
                                    <input value={priceRange2} min={0} max={10000} step={100} type="range" onChange={(e) => {setPriceRange2(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="form-group col-10 mt-5">
                                <p>刊登日期</p>
                                <input type="date" className="form-control" id="datefilter1" value={datefilter1} onChange={(e) => {setDateFilter1(e.target.value)}}/>
                                <p className="mt-3">至</p>
                                <input type="date" className="form-control" id="datefilter2" value={datefilter2} onChange={(e) => {setDateFilter2(e.target.value)}}/>
                            </div>

                            <button type="submit" className="btn btnhover mt-5" onClick={filiterButton}>套用</button>
                        </form>
                    </div>
    )

} 

export default Filter;
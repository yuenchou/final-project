import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import '../../css/myStyle06.css';
import { FaSortUp } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';
import { Image } from 'cloudinary-react';

const Posts = ({posts}) => {
    
    const [x, setPosts] = useState(posts);
    const [num, setNum] = useState(0);
    const [tmp, setTmp] = useState(0);
    const [sortIcon, setSortIcon] = useState();
    const [sortIcon2, setSortIcon2] = useState();

    const sortPrice = () => { 
        if (num === 0) {
            setPosts(posts.sort((a, b) => {return b.productprice - a.productprice}));
            setNum(1);
            setSortIcon(<FaSortUp/>);
            setSortIcon2();
        } else if (num === 1) {
            setPosts(posts.sort((a, b) => {return a.productprice - b.productprice}));
            setNum(0);
            setSortIcon(<FaSortDown/>);
            setSortIcon2();
        } 
    }

    const sortQuant = () => {  
        if (tmp === 0) {
            setPosts(posts.sort((a, b) => {return b.productquant - a.productquant}))
            setTmp(1);
            setSortIcon2(<FaSortUp/>);
            setSortIcon();
        } else if (tmp === 1) {
            setPosts(posts.sort((a, b) => {return a.productquant - b.productquant}));
            setTmp(0);
            setSortIcon2(<FaSortDown/>);
            setSortIcon();
        } 
    }
            

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th colSpan="2">商品</th>
                    <th style={{width:'80px', cursor: 'pointer'}} onClick={sortPrice}>價格{sortIcon}</th>
                    <th style={{width:'80px', cursor: 'pointer'}} onClick={sortQuant}>庫存{sortIcon2}</th>
                    <th>刊登日期</th>
                </tr>
            </thead>
            {posts.map(val => (
                <tbody key={val.productid}>
                    <tr>
                        <td>
                            <Image className="thumbnail" cloudName="domzm9awh" publicId={val.productimg.split(',')[0]}></Image>
                        </td>
                        <td>
                            <NavLink className="linkColor" target="_blank" to={`/VGT/ProductDetailPage/${val.productid}`}>
                                {val.producttitle}
                            </NavLink>
                        </td>
                        <td>{val.productprice}</td>
                        <td>{val.productquant}</td>
                        <td>{new Date(val.productdate).toLocaleDateString()}</td>
                    </tr>                        
                </tbody>
            ))}
        </table>
    )
    
}

export default Posts;
import React, { useState, useEffect } from 'react';
import '../../css/myStyle06.css';
import MesTitle from './MesTitle';
import axios from 'axios';



const ProductDesc = ({productItem, cmmtList}) => {

    const [ vgtid, setVgtId] = useState("");
    
    useEffect(() => {
        
        axios.get('http://localhost:3000/VgtLogin/login').then(
            (response) => setVgtId(response.data[0].vgtid)
        );
        
    }, [])

    
    return (
        <div className="d-flex flex-column align-items-center">
            <div class="card mt-5 col-9">
                <div class="card-header">商品資訊</div>
                <div id="descBody" className="card-body">
                    <p className="card-text ms-5">{productItem.productdesc}</p>
                </div>
                
            </div>
            
            <div  class="card mt-5 col-9">
                <div class="card-header">留言提問</div>
                <MesTitle cmmtList={cmmtList} 
                          vgtid={vgtid}
                          seller={productItem.vgtid}
                />
            </div>
        </div>
        
    )
}

export default ProductDesc
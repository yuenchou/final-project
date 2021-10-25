import React from 'react';
import '../../css/myStyle06.css';




const ProductDesc = ({productItem}) => {

    
    return (
        
            <div class="card mt-5 col-9">
                <div class="card-header">商品資訊</div>
                <div id="descBody" className="card-body">
                    <p className="card-text ms-5">{productItem.productdesc}</p>
                </div>
                
            </div>
    )
}

export default ProductDesc
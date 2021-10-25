import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'

function Product() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productList, setProductList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        vgtid: '', productid: -1, gamelist: '',gameserver:'', producttitle: '', productclassname: '', perductdesc: '',
        perductquant:'',productimg:'',productprice:'',productdate:'',producttoorder:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/product');
            setProductList(res.data);
        };
        fetchPosts();
    }, []);
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const newButton = () => {
        setCurrentItem({
            vgtid: '', productid: -1, gamelist: '',gameserver:'', producttitle: '', productclassname: '', perductdesc: '',
            perductquant:'',productimg:'',productprice:'',productdate:'',producttoorder:''
        });

        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = productList.findIndex(x => x.productid == id);
        console.log(index)
        setCurrentItem(Object.assign({}, productList[index]));
        setShow(true);

    }
    const okButton = () => {
        setShow(false);
        if (currentItem.productid == -1) {
           
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/product', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
              

                await axios.put('http://localhost:3000/Vgt/vgtserver/product', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } }
                )
                    .then((res) => {
                        console.log(res)
                    });
                window.location.reload();

            }
            putData();



        }


    }
    const removeButton = async (id) => {

        var index = productList.findIndex(x => x.productid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/product/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }







    return (
        <>
            <div className="container ">
                <h1 className="">商品資料
                    <span>
                        <button className="btn-lg fs-3 button " onClick={newButton}>
                            +
                        </button>
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start  ">

                    <table className="table table-bordered ">
                        <thead className="listTitle  text-center  text-nowrap ">
                            <tr>
                                <th>會員ID</th>
                                <th>商品編號</th>
                                <th>遊戲分類</th>
                                <th>伺服器 </th>
                                <th>商品標題</th>
                                <th>商品分類</th>
                                <th>商品內容</th>
                                <th>商品數量</th>
                                <th>商品圖片 </th>
                                <th>價錢 </th>
                                <th>刊登日期 </th>
                                <th>是否生成訂單 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        {currentPosts.map((val)=>(
                            <tbody className="text-center   ">
                            <tr>
                                <td>{val.vgtid}</td>
                                <td>{val.productid}</td>
                                <td>{val.gamelist}</td>
                                <td>{val.gameserver}</td>
                                <td>{val.producttitle}</td>
                                <td>{val.productclass}</td>
                                <td>{val.productdesc}</td>
                                <td>{val.productquant}</td>
                                <td>{val.productimg}</td>
                                <td>{val.productprice}</td>
                                <td>{val.productdate}</td>
                                <td>{val.producttoorder}</td>
                                <td>
                                    <button type="button" className=" btn-sm button"  onClick={()=>{editButton(val.productid)}}>
                                        修改
                                    </button><br /><br />
                                    <button className=" btn-sm button" onClick={()=>{removeButton(val.productid)}}>刪除</button>
                                </td>

                            </tr>

                        </tbody>

                        ))}
                        
                    </table>
                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={productList.length}
                        paginate={paginate}

                    />
                </main>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="listTitle" closeButton>
                    <Modal.Title>新增/修改</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">

                        <div className="input-group mb-3">
                            <label for="vgtid">
                                <span className="input-group-text listTitle text-center">&ensp;會員ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control" name='vgtid' id="vgtid" placeholder="請輸入會員ID" value={currentItem.vgtid}
                             onChange={handleChange}
                            />
                        </div>

                        {/* <div className="input-group mb-3">
                            <label for="productid">
                                <span className="input-group-text listTitle text-center">商品編號:</span>
                            </label>
                            <input type="text" className="form-control"  name='productid' id="productid" placeholder="請輸入商品編號"value={currentItem.productid}
                             onChange={handleChange}
                            />
                        </div> */}

                        <div className="input-group mb-3">
                            <label for="gamelist">
                                <span className="input-group-text listTitle text-center">遊戲分類:</span>
                            </label>
                            <input type="text" className="form-control"  name='gamelist' id="gamelist" placeholder="請輸入遊戲分類"value={currentItem.gamelist}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="gameserver">
                                <span className="input-group-text listTitle text-center">&ensp;伺服器:&ensp;</span>
                            </label>
                            <input type="text" className="form-control"  name='gameserver' id="gameserver" placeholder="請輸入伺服器"value={currentItem.gameserver}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="producttitle">
                                <span className="input-group-text listTitle text-center">商品標題:</span>
                            </label>
                            <input type="text" className="form-control"  name='producttitle' id="producttitle" placeholder="請輸入商品標題"value={currentItem.producttitle}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productclassname">
                                <span className="input-group-text listTitle text-center">商品分類:</span>
                            </label>
                            <input type="text" className="form-control"  name='productclass' id="productclassname" placeholder="請輸入商品分類"value={currentItem.productclass}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productdesc">
                                <span className="input-group-text listTitle text-center">商品內容:</span>
                            </label>
                            <input type="text" className="form-control"  name='productdesc' id="productdesc" placeholder="請輸入商品內容"value={currentItem.productdesc}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productquant">
                                <span className="input-group-text listTitle text-center">商品數量:</span>
                            </label>
                            <input type="text" className="form-control"  name='productquant' id="productquant" placeholder="請輸入商品數量"value={currentItem.productquant}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productimg">
                                <span className="input-group-text listTitle text-center">商品圖片:</span>
                            </label>
                            <input type="file" className="form-control"  name='productimg' id="productimg" placeholder="請輸入商品圖片"value={currentItem.productimg}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productprice">
                                <span className="input-group-text listTitle text-center">&ensp;&ensp;價錢:&ensp;&ensp;</span>
                            </label>
                            <input type="text" className="form-control"  name='productprice' id="productprice" placeholder="請輸入價錢"value={currentItem.productprice}
                             onChange={handleChange}
                            />
                        </div>
                        {/* <div className="input-group mb-3">
                            <label for="productdate">
                                <span className="input-group-text listTitle text-center">刊登日期:</span>
                            </label>
                            <input type="text" className="form-control"  name='productdate' id="productdate" placeholder="請輸入是否生成訂單"value={currentItem.productdate}
                             onChange={handleChange}
                            />
                        </div> */}
                        <div className="input-group mb-3">
                            <label for="producttoorder">
                                <span className="input-group-text listTitle text-center">是否生成訂單:</span>
                            </label>
                            <input type="text" className="form-control"  name='producttoorder' id="producttoorder" placeholder="請輸入是否生成訂單"value={currentItem.producttoorder}
                             onChange={handleChange}
                            />
                        </div>




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
                    <button type="button" className="btn-sm button" onClick={okButton}>儲存</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Product;
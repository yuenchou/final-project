import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'


function Order() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [orderList, setOrderList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        orderid: -1, buyerid: '', productid: '',orderdate:'', orderstate: '', charactername: '', characterdesc: '',ordereval:'',orderevalcmmt:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = orderList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/order');
            setOrderList(res.data);
        };
        fetchPosts();
    }, []);
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const newButton = () => {
        setCurrentItem({
            orderid: -1, buyerid: '', productid: '', orderdate:'', orderstate: '', charactername: '', characterdesc: '',ordereval:'',orderevalcmmt:''
        });

        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = orderList.findIndex(x => x.orderid == id);
        console.log(index)
        setCurrentItem(Object.assign({}, orderList[index]));
        setShow(true);

    }
    const okButton = () => {
        setShow(false);
        if (currentItem.orderid == -1) {
           
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/order', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
              

                await axios.put('http://localhost:3000/Vgt/vgtserver/order', JSON.stringify(currentItem),
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

        const index = orderList.findIndex(x => x.orderid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/order/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }




    return (
        <>
            <div className="container-md ">
                <h1 className="">訂單資料
                    <span>
                        <button className="btn-lg fs-3 button " onClick={newButton}>
                            +
                        </button>
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle  text-center">
                            <tr>
                                <th>訂單編號</th>
                                <th>買家ID </th>
                                <th>商品編號</th>
                                <th>訂單日期</th>
                                <th>交易狀態</th>
                                <th>角色名稱</th>
                                <th>角色特徵</th>
                                <th>評價</th>
                                <th>評價留言</th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>

                        {currentPosts.map((val) => (
                            <tbody className="text-center ">
                                <tr>
                                    <td>{val.orderid}</td>
                                    <td>{val.buyerid}</td>
                                    <td>{val.productid}</td>
                                    <td>{new Date(val.orderdate).toLocaleDateString()}</td>
                                    <td>{val.orderstate}</td>
                                    <td>{val.charactername}</td>
                                    <td>{val.characterdesc}</td>
                                    <td>{val.ordereval}</td>
                                    <td>{val.orderevalcmmt}</td>
                                    <td>
                                        <button type="button" className=" btn-sm button"
                                            onClick={()=>{editButton(val.orderid)}}>
                                            修改
                                        </button>&ensp;
                                        <button className=" btn-sm button" onClick={()=>{removeButton(val.orderid)}}>刪除</button>
                                    </td>

                                </tr>

                            </tbody>
                        ))}

                    </table>

                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={orderList.length}
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
                        {/* <div className="input-group mb-3">
                            <label for="orderid">
                                <span className="input-group-text listTitle text-center">訂單編號:</span>
                            </label>
                            <input type="text" className="form-control" id="orderid" name="orderid"  placeholder="請輸入訂單編號"  value={currentItem.orderid}
                            onChange={handleChange}
                            />
                        </div> */}

                        <div className="input-group mb-3">
                            <label for="buyerid">
                                <span className="input-group-text listTitle text-center">&ensp;買家ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="buyerid" name="buyerid" placeholder="請輸入買家ID" value={currentItem.buyerid}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productid">
                                <span className="input-group-text listTitle text-center">商品編號:</span>
                            </label>
                            <input type="text" className="form-control" id="productid" name="productid" placeholder="請輸入商品編號" value={currentItem.productid}
                             onChange={handleChange}
                            />
                        </div>
                        {/* <div className="input-group mb-3">
                            <label for="orderdate">
                                <span className="input-group-text listTitle text-center">訂單日期:</span>
                            </label>
                            <input type="date" className="form-control" id="orderdate" name="orderdate" placeholder="請輸入訂單日期" value={currentItem.orderdate}
                             onChange={handleChange}
                            />
                        </div> */}
                        <div className="input-group mb-3">
                            <label for="orderstate">
                                <span className="input-group-text listTitle text-center">交易狀態:</span>
                            </label>
                            <input type="text" className="form-control" id="orderstate" name="orderstate" placeholder="請輸入交易狀態" value={currentItem.orderstate}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="charactername">
                                <span className="input-group-text listTitle text-center">角色名稱:</span>
                            </label>
                            <input type="text" className="form-control" id="charactername" name="charactername" placeholder="請輸入角色名稱"value={currentItem.charactername}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="characterdesc">
                                <span className="input-group-text listTitle text-center">角色特徵:</span>
                            </label>
                            <input type="text" className="form-control" id="characterdesc" name="characterdesc" placeholder="請輸入角色特徵" value={currentItem.characterdesc}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="ordereval">
                                <span className="input-group-text listTitle text-center">評價:</span>
                            </label>
                            <input type="text" className="form-control" id="ordereval" name="ordereval" placeholder="請輸入評價" value={currentItem.ordereval}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="orderevalcmmt">
                                <span className="input-group-text listTitle text-center">評價留言:</span>
                            </label>
                            <input type="text" className="form-control" id="orderevalcmmt" name="orderevalcmmt" placeholder="請輸入評價留言" value={currentItem.orderevalcmmt}
                             onChange={handleChange}
                            />
                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
                    <button type="button" onClick={okButton} className="btn-sm button">儲存</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Order;
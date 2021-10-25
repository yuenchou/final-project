import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'


function OrderCmmt() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [orderCmmtList, setOrderCmmtList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        orderidset:-1,   orderid:'' ,  cmmtid:'',cmmtdesc:'',cmmtdate:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = orderCmmtList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/ordercmmt');
            setOrderCmmtList(res.data);
        };
        fetchPosts();
    }, []);
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    // const newButton = () => {
    //     setCurrentItem({
    //         orderidset:-1,   orderid:'' ,  cmmtid:'',cmmtdesc:'',cmmtdate:''
    //     });

    //     console.log(currentItem)
    //     setShow(true);
    // }
    // const editButton = (id) => {

    //     var index = orderCmmtList.findIndex(x => x.orderidset == id);
    //     console.log(index)
    //     setCurrentItem(Object.assign({}, orderCmmtList[index]));
    //     setShow(true);

    // }
    // const okButton = () => {
    //     setShow(false);
     

    //         var putData = async () => {
              

    //             await axios.put('http://localhost:3000/Vgt/vgtserver/ordercmmt', JSON.stringify(currentItem),
    //                 { headers: { 'Content-Type': 'application/json' } }
    //             )
    //                 .then((res) => {
    //                     console.log(res)
    //                 });
    //             window.location.reload();

    //         }
    //         putData();



      


    // }
    const removeButton = async (id) => {

        const index = orderCmmtList.findIndex(x => x.orderidset == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/ordercmmt/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        // window.location.reload();

    }

    return (
        <>
            <div className="container-md ">
                <h1 className="">訂單留言
                    <span>
                        {/* <button className="btn-lg fs-3  button" onClick={newButton}>
                            +
                        </button> */}
                    </span>

                </h1>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle text-center ">
                            <tr>
                                <th>訂單編號</th>
                                <th>留言ID</th>
                                <th>留言內容</th>
                                <th>留言時間 </th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        {currentPosts.map((val)=>(
                            <tbody className="text-center">
                            <tr>
                                <td>{val.orderid}</td>
                                <td>{val.cmmtid}</td>
                                <td>{val.cmmtdesc}?</td>
                                <td>{ new Date(val.cmmtdate).toLocaleDateString()}</td>
                                <td className="text-center">
                                    {/* <button type="button" className=" btn-sm button"  onClick={()=>{editButton(val.orderid)}}>
                                        修改
                                    </button>&ensp; */}
                                    <button className=" btn-sm button" onClick={()=>{removeButton(val.orderid)}}>刪除</button>
                                </td>

                            </tr>

                        </tbody>

                        ))}
                        
                    </table>

                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={orderCmmtList.length}
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
                            <label for="orderid">
                                <span className="input-group-text listTitle text-center">訂單編號:</span>
                            </label>
                            <input type="text" className="form-control" name="orderid" id="orderid" placeholder="請輸入訂單編號" value={currentItem.orderid}
                             onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <label for="cmmtid">
                                <span className="input-group-text listTitle text-center">&ensp;留言ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtid" id="cmmtid" placeholder="請輸入留言ID"value={currentItem.cmmtid}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="cmmtdesc">
                                <span className="input-group-text listTitle text-center">留言內容:</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtdesc" id="cmmtdesc" placeholder="請輸入留言內容"value={currentItem.cmmtdesc}
                             onChange={handleChange}
                            />
                        </div>

                        {/* <div className="input-group mb-3">
                            <label for="cmmtdate">
                                <span className="input-group-text listTitle text-center">留言時間:</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtdate" id="cmmtdate" placeholder="請輸入留言時間"value={currentItem.cmmtdate}
                             onChange={handleChange}
                            />
                        </div> */}




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
                    {/* <button type="button" className="btn-sm" onClick={okButton}>儲存</button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default OrderCmmt;
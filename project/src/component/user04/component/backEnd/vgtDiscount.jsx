import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'

function Discount() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [discountList, setDiscountList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        vgtid: '', discountidid:-1, discountid: '', discountprice: '',discountorder:'', discountuse: '', 
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = discountList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/vgtdiscount');
            setDiscountList(res.data);
        };
        fetchPosts();
    }, []);

    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const newButton = () => {
        setCurrentItem({
            vgtid: '', discountidid:-1, discountid: '', discountprice: '',discountorder:'', discountuse: '', 
        });

        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = discountList.findIndex(x => x.discountidid == id);
        console.log(index)
        setCurrentItem(Object.assign({}, discountList[index]));
        setShow(true);

    }
    const okButton = () => {
        setShow(false);
        if (currentItem.discountidid == -1) {
           
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/vgtdiscount', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
              

                await axios.put('http://localhost:3000/Vgt/vgtserver/vgtdiscount', JSON.stringify(currentItem),
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

        const index = discountList.findIndex(x => x.discountidid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/vgtdiscount/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }



    return (
        <>
            <div className="container ">
                <h1 className="">商品折扣
                    <span>
                        <button className="btn-lg  fs-3  button " onClick={newButton}>
                            +
                        </button>
                    </span>
                </h1><br /><br />
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle  text-center">
                            <tr>
                                <th>會員ID</th>
                                <th>折扣序號</th>
                                <th>折扣金額</th>
                                <th>折扣訂單</th>
                                <th>折扣是否使用</th>
                                <th>修改|刪除</th>

                            </tr>
                        </thead>
                        {currentPosts.map((val)=>(
                            <tbody className="text-center ">
                            <tr>
                                <td>{val.vgtid}</td>
                                <td>{val.discountid}</td>
                                <td>{val.discountprice}</td>
                                <td>{val.discountorder}</td>
                                <td>{val.discountuse}</td>
                                <td>
                                    <button type="button" className=" btn-sm button" onClick={()=>{editButton(val.discountidid)}}>
                                        修改
                                    </button>&ensp;
                                    <button className=" btn-sm button" onClick={()=>{removeButton(val.discountidid)}} >刪除</button>
                                </td>

                            </tr>

                        </tbody>

                        ))}
                        
                    </table>
                    <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={discountList.length}
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
                            <input type="text" className="form-control" name="vgtid" id="vgtid" placeholder="請輸入會員ID" value={currentItem.vgtid}
                            onChange={handleChange}
                            />
                        </div>
              
                        <div className="input-group mb-3">
                            <label for="discountid">
                                <span className="input-group-text listTitle text-center">折扣序號:</span>
                            </label>
                            <input type="text" className="form-control" name="discountid" id="discountid" placeholder="請輸入折扣序號"value={currentItem.discountid}
                                 onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="discountprice">
                                <span className="input-group-text listTitle text-center">折扣金額:</span>
                            </label>
                            <input type="text" className="form-control" name="discountprice" id="discountprice" placeholder="請輸入折扣金額"value={currentItem.discountprice}
                                 onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="discountorder">
                                <span className="input-group-text listTitle text-center">折扣訂單:</span>
                            </label>
                            <input type="text" className="form-control" name="discountorder" id="discountorder" placeholder="請輸入折扣訂單"value={currentItem.discountorder}
                                 onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="discountuse">
                                <span className="input-group-text listTitle text-center">折扣是否使用:</span>
                            </label>
                            <input type="text" className="form-control" name="discountuse" id="discountuse" placeholder="請輸入折扣是否使用"value={currentItem.discountuse}
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


export default Discount;
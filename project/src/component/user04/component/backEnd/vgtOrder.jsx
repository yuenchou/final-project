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
                <h1 className="">????????????
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
                                <th>????????????</th>
                                <th>??????ID </th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>????????????</th>
                                <th>??????</th>
                                <th>????????????</th>
                                <th>??????|??????</th>

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
                                            ??????
                                        </button>&ensp;
                                        <button className=" btn-sm button" onClick={()=>{removeButton(val.orderid)}}>??????</button>
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
                    <Modal.Title>??????/??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        {/* <div className="input-group mb-3">
                            <label for="orderid">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="orderid" name="orderid"  placeholder="?????????????????????"  value={currentItem.orderid}
                            onChange={handleChange}
                            />
                        </div> */}

                        <div className="input-group mb-3">
                            <label for="buyerid">
                                <span className="input-group-text listTitle text-center">&ensp;??????ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="buyerid" name="buyerid" placeholder="???????????????ID" value={currentItem.buyerid}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="productid">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="productid" name="productid" placeholder="?????????????????????" value={currentItem.productid}
                             onChange={handleChange}
                            />
                        </div>
                        {/* <div className="input-group mb-3">
                            <label for="orderdate">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="date" className="form-control" id="orderdate" name="orderdate" placeholder="?????????????????????" value={currentItem.orderdate}
                             onChange={handleChange}
                            />
                        </div> */}
                        <div className="input-group mb-3">
                            <label for="orderstate">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="orderstate" name="orderstate" placeholder="?????????????????????" value={currentItem.orderstate}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="charactername">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="charactername" name="charactername" placeholder="?????????????????????"value={currentItem.charactername}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="characterdesc">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="characterdesc" name="characterdesc" placeholder="?????????????????????" value={currentItem.characterdesc}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="ordereval">
                                <span className="input-group-text listTitle text-center">??????:</span>
                            </label>
                            <input type="text" className="form-control" id="ordereval" name="ordereval" placeholder="???????????????" value={currentItem.ordereval}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="orderevalcmmt">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" id="orderevalcmmt" name="orderevalcmmt" placeholder="?????????????????????" value={currentItem.orderevalcmmt}
                             onChange={handleChange}
                            />
                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    <button type="button" onClick={okButton} className="btn-sm button">??????</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Order;
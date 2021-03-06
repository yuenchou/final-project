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
                <h1 className="">????????????
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
                                <th>????????????</th>
                                <th>??????ID</th>
                                <th>????????????</th>
                                <th>???????????? </th>
                                <th>??????|??????</th>

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
                                        ??????
                                    </button>&ensp; */}
                                    <button className=" btn-sm button" onClick={()=>{removeButton(val.orderid)}}>??????</button>
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
                    <Modal.Title>??????/??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="input-group mb-3">
                            <label for="orderid">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="orderid" id="orderid" placeholder="?????????????????????" value={currentItem.orderid}
                             onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <label for="cmmtid">
                                <span className="input-group-text listTitle text-center">&ensp;??????ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtid" id="cmmtid" placeholder="???????????????ID"value={currentItem.cmmtid}
                             onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="cmmtdesc">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtdesc" id="cmmtdesc" placeholder="?????????????????????"value={currentItem.cmmtdesc}
                             onChange={handleChange}
                            />
                        </div>

                        {/* <div className="input-group mb-3">
                            <label for="cmmtdate">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control"  name="cmmtdate" id="cmmtdate" placeholder="?????????????????????"value={currentItem.cmmtdate}
                             onChange={handleChange}
                            />
                        </div> */}




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    {/* <button type="button" className="btn-sm" onClick={okButton}>??????</button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default OrderCmmt;
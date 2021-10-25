import { useState, useEffect } from 'react';
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import PagiNation from './pagiNation'




const Appeal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleshow = () => setShow(true);
    const [appealList, setAppealList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        appealid: -1, appellantid: '', orderid: '',
        appealclassname: '', appealdesc: '', appealdate: '', appealimg: '', rplyid: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = appealList.slice(indexOfFirstPost, indexOfLastPost);
    const [serchTerm, setSerchTerm] = useState('');

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/appeal');
            setAppealList(res.data);
        };
        fetchPosts();
    }, []);
    const newButton = () => {
        setCurrentItem({
            appealid: '',
            appellantid: '',
            orderid: '',
            appealclassname: '',
            appealdesc: '',
            appealdate: '',
            appealimg: '',
            rplyid: ''

        });
        console.log(currentItem)
        setShow(true);
    }
    const editButton = (id) => {

        var index = appealList.findIndex(x => x.appealid == id);
        console.log(id)
        setCurrentItem(Object.assign({}, appealList[index]));

        setShow(true);

    }
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    const okButton = () => {
        setShow(false);


        var postData = () => {
            axios.post('http://localhost:3000/Vgt/vgtserver/appealrply', JSON.stringify(currentItem),
                { headers: { 'Content-Type': 'application/json' } })

                .then((response) => {
                    console.log(response);
                    console.log(currentItem);
                })
            window.location.reload();
        }
        postData();

        var putData = () => {
            axios.put('http://localhost:3000/Vgt/vgtserver/appeal', JSON.stringify(currentItem),
                { headers: { 'Content-Type': 'application/json' } })

                .then((response) => {
                    console.log(response);
                    console.log(currentItem);
                })
            window.location.reload();
        }
        putData();



    }

    const removeButton = async (id) => {

        const index = appealList.findIndex(x => x.appealid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/appeal/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }
    // const Appealrply = () => {

    //     const [show, setShow] = useState(false);
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
    //     const [appealrplyList, setAppealrplyList] = useState([]);

    //     const [currentItem, setCurrentItem] = useState({
    //         appelid: -1, managerid: '', replydesc: '', replydate: ''
    //     });

    //     useEffect(() => {
    //         const fetchPosts = async () => {
    //             const res = await axios.get('http://localhost:3000/Vgt/vgtserver/appealrply');
    //             setAppealrplyList(res.data);
    //         };
    //         fetchPosts();
    //     }, []);






    //     const test = (id) => {
    //         setShow(true)

    //         const index = appealrplyList.findIndex(x => x.appealid == id);
    //         setCurrentItem(Object.assign({}, appealrplyList[index]));
    //     }


    //     const handleChange = (e) => {
    //         setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    //     };




    //     return (
    //         <>
    //             <Button className="btn btn-secondary btn-sm" onClick={() => { test() }}>
    //                 回覆
    //             </Button>


    //             <Modal
    //                 show={show}
    //                 onHide={handleshow}
    //                 backdrop="static"
    //                 keyboard={false}
    //             >
    //                 <Modal.Header className="listTitle" closeButton>
    //                     <Modal.Title>新增/修改</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <form action="">
    //                         <div className="input-group mb-3">
    //                             <label for="">
    //                                 <span className="input-group-text listTitle text-center" >申訴編號:</span>
    //                             </label>
    //                             <input type="text" className="form-control" id="appelid" name="appelid" placeholder="請輸入申訴編號" value={currentItem.appelid}
    //                                 onChange={handleChange}
    //                             />
    //                         </div>

    //                         <div className="input-group mb-3">
    //                             <label for="">
    //                                 <span className="input-group-text listTitle text-center">管理人ID:</span>
    //                             </label>
    //                             <input type="text" className="form-control" id="managerid" name="managerid" placeholder="請輸入管理人ID"value={currentItem.managerid}
    //                                 onChange={handleChange}
    //                             />
    //                         </div>
    //                         <div className="input-group mb-3">
    //                             <label for="">
    //                                 <span className="input-group-text listTitle text-center">回覆內容:</span>
    //                             </label>
    //                             <input type="text" className="form-control" id="rplydesc" name="rplydesc" placeholder="請輸入回覆內容"value={currentItem.rplydesc}
    //                                 onChange={handleChange}
    //                             />
    //                         </div>

    //                         <div className="input-group mb-3">
    //                             <label for="">
    //                                 <span className="input-group-text listTitle text-center">回覆日期:</span>
    //                             </label>
    //                             <input type="date" className="form-control" id="rplydate" name="rplydate" placeholder="請輸入回覆日期"value={currentItem.rplydate}
    //                                 onChange={handleChange}
    //                             />
    //                         </div>
    //                     </form>
    //                 </Modal.Body>
    //                 <Modal.Footer>
    //                     <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" onClick={handleClose}>關閉</button>
    //                     <button type="button" className="btn-sm" onClick={okButton}>儲存</button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     )

    // }






    return (
        <>
            <div className="container-md ">
                <h1 className="">申訴資料
                    <span>
                        {/* <button className="btn-lg fs-3  button " onClick={newButton}>
                            +
                        </button> */}
                    </span>


                </h1>
                <label htmlFor="">
                            <input type="text" className="form-control"placeholder="搜尋" onChange={e=>{setSerchTerm(e.target.value)}} />
                        </label>
                <br /><br></br>
                <main className="align-items-start ">

                    <table className="table table-bordered">
                        <thead className="listTitle  text-center">
                            <tr>
                                <th>申訴編號</th>
                                <th>申訴人ID</th>
                                <th>訂單編號</th>
                                <th>申訴分類 </th>
                                <th>申訴內容</th>
                                <th>申訴時間</th>
                                <th>申訴圖片</th>
                                <th>申訴狀態</th>
                                <th>回覆|刪除</th>

                            </tr>
                        </thead>

                        {serchTerm ? appealList.filter((val) => {
                            if (serchTerm == '') {
                                return val
                            } else if (val.appealstate=="未回覆") {
                                return val
                            }

                        }).map((val) => (
                            <tbody className=" text-center">
                                <tr>
                                    <td>{val.appealid}</td>
                                    <td>{val.appellantid}</td>
                                    <td>{val.orderid}</td>
                                    <td>{val.appealclass}</td>
                                    <td>{val.appealdesc}</td>
                                    <td>{val.appealdate}</td>
                                    <td>{val.appealimg}</td>
                                    <td>{val.appealstate}</td>

                                    <td className=" text-center">
                                        <button type="button" className=" btn-sm button" onClick={() => { editButton(val.appealid) }} >
                                            回覆
                                        </button>&ensp;
                                        <button className=" btn-sm button" onClick={() => { removeButton(val.appealid) }}>刪除</button>&ensp;
                                        {/* <Appealrply /> */}
                                    </td>

                                </tr>

                            </tbody>


                        )): currentPosts.map((val) => (
                            <tbody className=" text-center">
                                <tr>
                                    <td>{val.appealid}</td>
                                    <td>{val.appellantid}</td>
                                    <td>{val.orderid}</td>
                                    <td>{val.appealclass}</td>
                                    <td>{val.appealdesc}</td>
                                    <td>{val.appealdate}</td>
                                    <td>{val.appealimg}</td>
                                    <td>{val.appealstate}</td>

                                    <td className=" text-center">
                                        <button type="button" className=" btn-sm button" onClick={() => { editButton(val.appealid) }} >
                                            回覆
                                        </button>&ensp;
                                        <button className=" btn-sm button" onClick={() => { removeButton(val.appealid) }}>刪除</button>&ensp;
                                        {/* <Appealrply /> */}
                                    </td>

                                </tr>

                            </tbody>


                        ))}

                    </table>
                </main>
            </div>

            <PagiNation
                postdPerPagem={postsPage}
                totalPosts={appealList.length}
                paginate={paginate}

            />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="listTitle" closeButton>
                    <Modal.Title>回覆</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="input-group mb-3">
                            <label for="appelid">
                                <span className="input-group-text listTitle text-center" >申訴編號:</span>
                            </label>
                            <input type="text" className="form-control" disabled id="appelid" name="appelid" placeholder="請輸入申訴編號" value={currentItem.appealid}
                                onChange={handleChange}
                            />
                        </div>



                        <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">管理人ID:</span>
                            </label>
                            <input type="text" className="form-control" id="managerid" name="managerid" placeholder="請輸入管理人ID" value={currentItem.managerid}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">回覆內容:</span>
                            </label>
                            <input type="text" className="form-control" id="rplydesc" name="rplydesc" placeholder="請輸入回覆內容" value={currentItem.rplydesc}
                                onChange={handleChange}
                            />
                        </div>


                        {/* <div className="input-group mb-3">
                            <label for="">
                                <span className="input-group-text listTitle text-center">回覆日期:</span>
                            </label>
                            <input type="date" className="form-control" id="rplydate" name="rplydate" placeholder="請輸入回覆日期" value={currentItem.rplydate} 
                            onChange={handleChange}
                            />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appelid">
                                <span className="input-group-text listTitle text-center">申訴編號:</span>
                            </label>
                            <input type="text" className="form-control" name="appelid" onChange={handleChange} id="appealid" placeholder="請輸入申訴編號" value={currentItem.appealid} />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appellantid">
                                <span className="input-group-text listTitle text-center">申訴人ID:</span>
                            </label>
                            <input type="text" className="form-control" name="appellantid" onChange={handleChange} id="appellantid" placeholder="請輸入申訴人ID" value={currentItem.appellantid} />
                        </div> */}
                        {/* <div className="input-group mb-3">
                            <label for="orderid">
                                <span className="input-group-text listTitle text-center">訂單編號:</span>
                            </label>
                            <input type="text" className="form-control" name="orderid" onChange={handleChange} id="orderid" placeholder="請輸入訂單編號" value={currentItem.orderid} />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appealclass">
                                <span className="input-group-text listTitle text-center">申訴分類:</span>
                            </label>
                            <input type="text" className="form-control" name="appealclass" onChange={handleChange} id="appealclass" placeholder="請輸入申訴分類" value={currentItem.appealclass} />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appealdesc">
                                <span className="input-group-text listTitle text-center">申訴內容:</span>
                            </label>
                            <input type="text" className="form-control" name="appealdesc" onChange={handleChange} id="appealdesc" placeholder="請輸入申訴內容" value={currentItem.appealdesc} />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appealdate">
                                <span className="input-group-text listTitle text-center">申訴時間:</span>
                            </label>
                            <input type="date" className="form-control" name="appealdate" onChange={handleChange} id="appealdate" placeholder="請輸入申訴時間" value={currentItem.appealdate} />
                        </div> */}

                        {/* <div className="input-group mb-3">
                            <label for="appealimg">
                                <span className="input-group-text listTitle text-center">申訴圖片:</span>
                            </label>
                            <input type="file" className="form-control" name="appealimg" onChange={handleChange} id="appealimg" placeholder="請輸入申訴圖片" value={currentItem.appealimg} />
                        </div> */}


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










export default Appeal;
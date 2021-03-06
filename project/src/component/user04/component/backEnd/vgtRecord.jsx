import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'

function Record() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [recordList, setRecordList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        vgtid: -1, price: '', type: '',date:''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = recordList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/vgtrecord');
            setRecordList(res.data);
        };
        fetchPosts();
    }, []);
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };
    // const newButton = () => {
    //     setCurrentItem({
    //         vgtid: -1, price: '', type: '',date:''
    //     });

    //     console.log(currentItem)
    //     setShow(true);
    // }
    // const editButton = (id) => {

    //     var index = recordList.findIndex(x => x.vgtid == id);
    //     console.log(index)
    //     setCurrentItem(Object.assign({}, recordList[index]));
    //     setShow(true);

    // }
    const removeButton = async (id) => {

        const index = recordList.findIndex(x => x.recordid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/vgtrecord/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }




    return (
        <>
           <div class="container ">
        <h1 class="">????????????
            <span>
                {/* <button class="btn-lg  fs-3 button  " onClick={newButton}>
                    +
                   </button> */}
            </span>
        </h1><br/><br/>
        <main class="align-items-start ">

            <table class="table table-bordered">
                <thead class="listTitle   text-center">
                    <tr>
                        <th>??????ID</th>
                        <th>????????????</th>
                        <th>????????????</th>
                        <th>????????????</th>
                        <th>??????|??????</th>

                    </tr>
                </thead>

                {currentPosts.map((val)=>(
                    <tbody className="text-center ">
                    <tr>
                        <td>{val.vgtid}</td>
                        <td>{val.price}</td>
                        <td>{val.type}</td>
                        <td>{val.date}</td>
                        <td>
                            {/* <button type="button" class=" btn-sm button" onClick={()=>{editButton(val.vgtid)}}>
                                ??????
                            </button>&ensp; */}
                            <button class=" btn-sm button" onClick={()=>(removeButton(val.recordid))}>??????</button>
                        </td>

                    </tr>
                   
                </tbody>

                ))}
                
            </table>
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
                            <label for="vgtid">
                                <span className="input-group-text listTitle text-center">&ensp;??????ID:&ensp;</span>
                            </label>
                            <input type="text" className="form-control" name="vgtid" placeholder="???????????????ID"value={currentItem.vgtid}
                           onChange={handleChange}
                           />
                        </div>
              
                        <div className="input-group mb-3">
                            <label for="price">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="price" id="price" placeholder="?????????????????????"value={currentItem.price}
                            onChange={handleChange}
                           />
                        </div>
                        <div className="input-group mb-3">
                            <label for="type">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="type" id="type" placeholder="?????????????????????"value={currentItem.type}
                            onChange={handleChange}
                           />
                        </div>
                        <div className="input-group mb-3">
                            <label for="date">
                                <span className="input-group-text listTitle text-center">????????????:</span>
                            </label>
                            <input type="text" className="form-control" name="date" id="date" placeholder="?????????????????????"value={currentItem.date}
                             onChange={handleChange}
                            />
                        </div>
                   
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    <button type="button" class="btn-sm button">??????</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Record;
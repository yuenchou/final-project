import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../../css/user_04.css';
import axios from 'axios'
import PagiNation from './pagiNation'

function Member() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [memberList, setMemberList] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        vgtid: -1, vgtname: '', account: '', password: '', truename: '', birthdate: '',
        trueid: '', email: '', phone: '', auth: '', vgtpoint: '', vgtpassword: '', eval: ''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage, setPostsPage] = useState(10);
    


    const indexOfLastPost = currentPage * postsPage;
    const indexOfFirstPost = indexOfLastPost - postsPage;
    const currentPosts = memberList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const [serchTerm,setSerchTerm]=useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:3000/Vgt/vgtserver/member');
            setMemberList(res.data);
        };
        fetchPosts();
    }, []);

    const newButton = () => {
        setCurrentItem({
            vgtid: -1,
            vgtname: '',
            account: '',
            password: '',
            truename: '',
            birthdate: '',
            trueid: '',
            email: '',
            phone: '',
            auth: '',
            vgtpoint: '',
            vgtpassword: '',
            eval: ''
        });

        console.log(currentItem)
        setShow(true);
    }



    const editButton = (id) => {

        var index = memberList.findIndex(x => x.vgtid == id);
        console.log(id)
        setCurrentItem(Object.assign({}, memberList[index]));
        setShow(true);

    }
    const removeButton = async (id) => {

        const index = memberList.findIndex(x => x.vgtid == id);
        console.log(index)

        await axios.delete(`http://localhost:3000/Vgt/vgtserver/member/${id}`, { index },
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            console.log(res)
        })
        window.location.reload();

    }

    const okButton = () => {
        setShow(false);
        if (currentItem.vgtid == -1) {
            // var newItem = setCurrentItem({
            //    ...currentItem
            // })
            var postData = () => {
                axios.post('http://localhost:3000/Vgt/vgtserver/member', JSON.stringify(currentItem),
                    { headers: { 'Content-Type': 'application/json' } })
                    .then((response) => {
                        console.log(response);
                    })
                window.location.reload();
            }
            postData();

        } else {

            var putData = async () => {
                // setCurrentItem({
                //     vgtid: currentItem.vgtid,
                //     vgtname: currentItem.vgtname,
                //     account: currentItem.account,
                //     password: currentItem.password,
                //     truename: currentItem.truename,
                //     birthdate: currentItem.birthdate,
                //     trueid: currentItem.trueid,
                //     email: currentItem.email,
                //     phone: currentItem.phone,
                //     auth: currentItem.auth,
                //     vgtpoint: currentItem.vgtpoint,
                //     vgtpassWord: currentItem.vgtpassWord
                // })

                await axios.put('http://localhost:3000/Vgt/vgtserver/member', JSON.stringify(currentItem),
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
    const handleChange = (e) => {
        setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
    };


    // useEffect(async () => {

    //     const res = await axios.get('http://localhost:3000/Vgt/vgtserver/member');
    //     setMemberList(res.data);
    //     const ress = await axios.get('http://localhost:3000/Vgt/vgtserver/member');
    //     setCurrentItem(ress.data);



    // }, []);



    return (

        <>

            <div className="container-md ">
                <h1>????????????
                    <span>
                        <button className="btn-lg fs-3  button" onClick={newButton}>
                            +
                        </button>
                    </span>

                </h1>
                <label htmlFor="">
                            <input type="text" className="form-control"placeholder="??????" onChange={e=>{setSerchTerm(e.target.value)}} />
                        </label>

                <br /><br></br>
                <main className="align-items-start align-middle  example text-center">

                    <table className="table table-bordered">
                        <thead className="listTitle text-center  text-justify text-nowrap">
                            <tr>
                                <th>??????ID</th>
                                <th>??????</th>
                                <th>??????</th>
                                {/* <th>??????</th> */}
                                <th>??????</th>
                                <th>??????</th>
                                <th>?????????</th>
                                <th>??????</th>
                                <th>??????</th>
                                <th>??????</th>
                                <th>??????</th>
                                {/* <th>????????????</th> */}
                                <th>??????</th>
                                <th>??????|??????</th>

                            </tr>
                        </thead>

                        { serchTerm  ?   memberList.filter((val)=>{
                            if(serchTerm ==''){
                                return val
                            }else if(val.truename.toLowerCase().includes(serchTerm.toLowerCase())){
                                return val
                            }
                        }).map((val) => (
                            <tbody className="text-center text-nowrap" key={val.vgtid}>
                                <tr>
                                    <td>{val.vgtid}</td>
                                    <td>{val.vgtname}</td>
                                    <td>{val.account}</td>
                                    {/* <td>{val.password}</td> */}
                                    <td >{val.truename}</td>
                                    <td>{new Date(val.birthdate).toLocaleDateString()}</td>
                                    <td>{val.trueid}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phone}</td>
                                    <td>{val.auth}</td>
                                    <td>{val.vgtpoint}</td>
                                    <td>{val.vgtpassWord}</td>
                                    <td>{val.eval}</td>
                                    <td>
                                        <button type="button" className=" btn-sm button" onClick={() => editButton(val.vgtid)}>
                                            ??????
                                        </button><br />
                                        <button className=" btn-sm button" onClick={() => removeButton(val.vgtid)}>??????</button>
                                    </td>

                                </tr>
                            </tbody>
                        )) :  currentPosts.map((val) => (
                            <tbody className="text-center  text-nowrap" key={val.vgtid}>
                                <tr>
                                    <td>{val.vgtid}</td>
                                    <td>{val.vgtname}</td>
                                    <td>{val.account}</td>
                                    {/* <td>{val.password}</td> */}
                                    <td>{val.truename}</td>
                                    <td>{new Date(val.birthdate).toLocaleDateString()}</td>
                                    <td>{val.trueid}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phone}</td>
                                    <td>{val.auth}</td>
                                    <td>{val.vgtpoint}</td>
                                    {/* <td>{val.vgtpassWord}</td> */}
                                    <td>{val.eval}</td>
                                    <td>
                                        <button type="button" className=" btn-sm button" onClick={() => editButton(val.vgtid)}>
                                            ??????
                                        </button>&ensp;
                                        <button className=" btn-sm button" onClick={() => removeButton(val.vgtid)}>??????</button>
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                        
                         






                    </table>
                   
                   
                </main>
                {serchTerm ? '':  <PagiNation
                        postdPerPagem={postsPage}
                        totalPosts={memberList.length}
                        paginate={paginate}

                    />}

            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="listTitle" closeButton>
                    <Modal.Title >??????/??????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >

                        <div className="input-group mb-3" >
                            <label htmlFor="vgtname">
                                <span className="input-group-text listTitle text-center">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="vgtname" name="vgtname" placeholder="???????????????" value={currentItem.vgtname}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="account">
                                <span className="input-group-text listTitle text-center">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="account" name="account" placeholder="???????????????" value={currentItem.account}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="password">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="password" name="password" placeholder="???????????????" value={currentItem.password}
                                onChange={handleChange} />
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="truename">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="truename" name="truename" placeholder="???????????????" value={currentItem.truename}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="birthdate">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="date" className="form-control" id="birthdate" name="birthdate" placeholder="???????????????" value={currentItem.birthdate}
                                onChange={handleChange} />
                        </div>

                        <div className="input-group mb-3">
                            <label htmlFor="trueid">
                                <span className="input-group-text listTitle">????????? :</span>
                            </label>
                            <input type="text" className="form-control" id="trueid" name="trueid" placeholder="??????????????????" value={currentItem.trueid}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="email">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="?????????E-Mail" value={currentItem.email}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="phone">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="???????????????" value={currentItem.phone}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="auth">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="auth" name="auth" placeholder="???????????????" value={currentItem.auth}
                                onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <label htmlFor="vgtpoint">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="number" className="form-control" id="vgtpoint" name="vgtpoint" name="vgtpoint" placeholder="???????????????" value={parseInt(currentItem.vgtpoint)}
                                onChange={handleChange} />
                        </div>
                        {/* <div className="input-group mb-3">
                            <label htmlFor="vgtpassword">
                                <span className="input-group-text listTitle">???????????? :</span>
                            </label>
                            <input type="text" className="form-control" id="vgtpassword" name="vgtpassword" placeholder="?????????????????????" value={currentItem.vgtpassword}
                                onChange={handleChange} />
                        </div> */}
                        <div className="input-group mb-3">
                            <label htmlFor="vgtpassword">
                                <span className="input-group-text listTitle">&ensp;?????? :&ensp;</span>
                            </label>
                            <input type="text" className="form-control" id="eval" name="eval" placeholder="???????????????" value={currentItem.eval}
                                onChange={handleChange} />
                        </div>



                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary btn-sm button" data-bs-dismiss="modal" onClick={handleClose}>??????</button>
                    <button type="button" className="btn-sm button" onClick={okButton}>??????</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Member;











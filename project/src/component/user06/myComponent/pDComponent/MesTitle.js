import axios from 'axios';
import React, { useState } from 'react';
import '../../css/myStyle06.css';


const MesTitle = ({cmmtList, vgtid, newCmmt, seller}) => {

    const [ cmmt, setCmmt ] = useState(""); // all comment include replydesc
    const [ replydesc, setReplyDesc] = useState(""); // the temp to send new reply or revise reply
    const [ cmmtId, setCmmtId] = useState("");
    const [ cklogin, setCklogin ] = useState("");
   
    const submitCmmt = (e) => {
        // e.preventDefault();
        
        if(vgtid !== "") {
            axios.post("http://localhost:3000/VgtProductCmmt/productcmmt",
            { 
                vgtid: vgtid,
                productid: cmmtList[0].productid,
                cmmtdesc: cmmt 
            }).then((response) => {
                console.log(response)
                newCmmt(response.data);
                setCklogin("");
            });
        } else {
            e.preventDefault();
            setCklogin("尚未登入!")
        }
    }

    const submitReply = () => {
        // e.preventDefault();
        
        axios.post("http://localhost:3000/VgtProductCmmt/productcmmtreply",
        { 
            cmmtid: cmmtId,
            vgtid: vgtid,
            productid: cmmtList[0].productid,
            replydesc: replydesc
        }).then((response) => {
            setReplyDesc(response.data);
        });
    }

    const reviseReply = () => {
        // e.preventDefault();
        
        axios.put("http://localhost:3000/VgtProductCmmt/productcmmtreply",
        { 
            cmmtid: cmmtId,
            replydesc: replydesc
        }).then((response) => {
            setReplyDesc(response.data);
        });
    }

    return (
        <div id="mesTitle" className="card-body row ">
            { vgtid !== seller &&
                <form id="cmmtForm" className="mb-4">
                    <div className="d-flex justify-content-start col-11 p-3 ms-5 me-5 mt-1">
                        <div className="input-group mb-2 ">
                            <span className="input-group-text" id="basic-addon4">留言提問</span>   
                            <textarea className="form-control" 
                                        aria-label="With textarea" 
                                        form="cmmtForm"
                                        value={cmmt}
                                        onChange={e => setCmmt(e.target.value)}
                                        required
                            >
                            </textarea>
                        </div>
                    </div>
                    
                        <div className="d-flex justify-content-end pe-3 me-5">
                            <p className="h5 me-3">{cklogin}</p>
                            <button type="submit" className="btn primebg btnhover" onClick={submitCmmt}>留言</button>
                        </div>  
                </form>
            }
            
            {cmmtList.length === 0 && <div>.......................................................................................................................................................................................................</div>}
            {cmmtList.length !==0 && <div>................................................................................................................................................................................................................</div>}
            {cmmtList.map(val => (
                <div className="card-text col-10 ms-5 p-3 mt-1 border-bottom border-info">
                    <div className="d-flex justify-content-between mb-3">
                        <span>{val.vgtname}：{val.cmmtdesc}</span>
                        <span>{val.cmmtdate.substr(0, 10)}</span>
                    </div>
                    { (vgtid !== seller && val.replydesc) && 
                        <form className="d-flex justify-content-between mt-3">
                            <span className="mt-2">版主回覆：{val.replydesc}</span>                            
                        </form>
                    }
                    { (vgtid == seller && !val.replydesc) &&
                        <form className="d-flex justify-content-start mt-3">
                            <span className="mt-1">版主回覆：</span> 
                            <input className="col-9 ms-3 border"                                    
                                    
                                    onChange={(e)=>{setReplyDesc(e.target.value); setCmmtId(val.cmmtid)}}
                            />
                            <button type="submit" className="btn ms-3 primebg btnhover" onClick={submitReply}>回覆</button>
                        </form>
                    }
                    { (vgtid == seller && val.replydesc) &&
                        <form className="d-flex justify-content-start mt-3">
                            <span className="mt-1">版主回覆：</span> 
                            <input className="col-9 ms-3 border"                                    
                                    defaultValue={val.replydesc}
                        
                                    onChange={(e)=>{setReplyDesc(e.target.value); setCmmtId(val.cmmtid)}}
                            />
                            <button type="submit" className="btn ms-3 primebg btnhover" onClick={reviseReply}>修改</button>
                        </form>
                    }
                </div>
            ))}
          
            
        </div>
    ) 
}

export default MesTitle;
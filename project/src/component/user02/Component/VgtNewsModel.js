import React, { Component, useState,useEffect } from 'react';
import axios from "axios";
import '../css/style.css';
import { Modal, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../css/style.scss"






    function NewsModel(props) {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
        return (
                <React.Fragment>
                    <>
                        <td variant="primary" onClick={handleShow} className="col-9">
                            <a>                        
                                    {props.newstitle}
                            </a> 
                        </td>
                        
                        <td className="col-3 text-center">
                            {props.newsdate}
                        </td>
                    
                    </>
                        <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
                            <Modal.Header closeButton>
                            <Modal.Title>{props.newstitle}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {props.newsdesc}
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                </React.Fragment>
        );
    }

    const baseURL = "http://localhost:3000/Vgt/vgtserver/vgtnews";


    class VgtNewsModel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                vgtNews:[]
            }
        }
        componentDidMount(e) {
            axios.get(`http://localhost:3000/Vgt/vgtserver/vgtnews`).then(
                (res) => (
                    this.setState({
                        vgtNews: res.data
                    })
                    // console.log("vgtNews",vgtNews)
                )
            ).catch(
                err => console.log("err",err)
            )
         }
        render() { 
            return (
                <div>
                    <div className="container w-75 mt-5 border-secondary">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-project">
                                <tr>
                                    <th className="col-9">公告</th>
                                    <th className="col-3 text-center">更新日期</th>
                                </tr>
                            </thead>
                            <tbody className="w-100">
                                {this.state.vgtNews.map((item) => (
                                    <tr>
                                        <NewsModel newstitle={item.newstitle} newsdate={ new Date(item.newsdate).toLocaleDateString()} newsdesc={item.newsdesc }/>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>        
                </div>
                
            );
                    
        }        
    }
    

 
export default VgtNewsModel;
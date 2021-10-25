import React, { Component } from "react";
import MemberPageRouter from '../Component/memberPage_Router';


class MemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
        <React.Fragment>
            <div className="container d-flex flex-column row">     
                <div className="col-12">                                                
                    <MemberPageRouter/>
                </div>
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
                <br/>                                                      
            </div>
        </React.Fragment>            
        );
    }
}


export default MemberPage;

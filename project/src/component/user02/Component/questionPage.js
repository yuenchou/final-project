import React, { Component } from "react";
import QuestionNav from '../Component/questionPage_Nav';
import QuestionPageRouter from '../Component/questionPage_Router';
import '../css/style.css'

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <React.Fragment>
            <div className="container d-flex flex-column ">
     
                <div className="row d-flex ">
                    <div className="col-3 ">
                        <QuestionNav/> 
                    </div>
                    <div className="col-9 ">                                                
                        <QuestionPageRouter/>
                    </div>                    
                </div>                  
            </div>
        </React.Fragment>            
        );
    }
}


export default QuestionPage;

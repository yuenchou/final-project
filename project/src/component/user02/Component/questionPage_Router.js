import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import QuestionBuy from '../../user02/Component/questionPage_list/questionBuy';
import QuestionBuySellTrad from '../../user02/Component/questionPage_list/questionBuySellTrad';
import QuestionTradeCancel from '../../user02/Component/questionPage_list/questionTradeCancel';
import QuestionTradeSafe from '../../user02/Component/questionPage_list/questionTradeSafe';




const PageRouter = () => (
    <Switch>
        <Route exact path="/VGT/QuestionPage">
            <Redirect to="/VGT/QuestionPage/questionBuy"></Redirect>
        </Route>
        <Route path="/VGT/QuestionPage/questionBuy" component={QuestionBuy}></Route>
        <Route path="/VGT/QuestionPage/questionBuySellTrad" component={QuestionBuySellTrad}></Route>
        <Route path="/VGT/QuestionPage/questionTradeCancel" component={QuestionTradeCancel}></Route>
        <Route path="/VGT/QuestionPage/questionTradeSafe" component={QuestionTradeSafe}></Route>
        
    </Switch>
);

class QuestionPageRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <PageRouter/>                                                   
         );
    }
}


export default QuestionPageRouter;
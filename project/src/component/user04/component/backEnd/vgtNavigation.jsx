import '../../css/user_04.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';





const Navigation = () => {
    return (
        <div className="col-1 float-md-start position-absolute top-50 start-0 text-center " >
            <nav >
                <div className="list-group  ">
                    <ListGroup defaultActiveKey="/vgt/vgtMember" className="navigation" >
                        <ListGroup.Item action href="/vgt/vgtMember" className="navigation">
                            會員資料
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtOrder" >
                            訂單資料
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtOrderCmmt" >
                            訂單留言
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtProduct" >
                            商品資料
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtProductCmmt" >
                            商品留言
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtAppeal" >
                            申訴資料
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtAppealRply" >
                            申訴回覆
                        </ListGroup.Item>
                        <ListGroup.Item action href="/vgt/vgtNews" >
                            公告資料
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </nav>
        </div>
    );
}


export default Navigation;
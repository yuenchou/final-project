import React, { Component } from 'react';
import StoredValue from '../../../user01/Component/storedValue';

class StoreValue extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container d-flex flex-column">
                <div>
                    <StoredValue/>
                </div>                
            </div>
         );
    }
}
 
export default StoreValue;
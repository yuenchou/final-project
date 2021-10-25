import React, { Component } from 'react';
import ProfileIndex from '../memberPage_Content/profile/profile_index';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="container">
               <div className="container">
                    <ProfileIndex/>
                </div>
            </div>
        );
    }
}
 
export default Profile;
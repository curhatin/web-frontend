import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import PstoryDetail from '../MainComponents/PstoryDetail/PstoryDetail';


class PeopleStoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Navbar />
                <UserNavbar />
            
                <PstoryDetail />
            </div>
         );
    }
}
 
export default PeopleStoryDetail;
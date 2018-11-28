import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import MstoryDetail from '../MainComponents/MstoryDetail/MstoryDetail';
import {connect} from 'react-redux'
import {login} from '../../actions/authActions'
import {fetchDataPostById} from '../../actions/postActions'

class MyStoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Navbar />
            <UserNavbar />

             { this.props.post_list && this.props.post_list.map((postDataId,index)=> (
          <MstoryDetail topic={postDataId.topic} post={postDataId.post} key={index} commentlength={postDataId[`posts-comments`].length} date={postDataId.createdAt} />
          ))}
       

        </div>
             );
    }
}
 
const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated,
    post_list : state.post.post_list
  })
  
  export default connect(mapStateToProps,{login,fetchDataPostById})(MyStoryDetail )
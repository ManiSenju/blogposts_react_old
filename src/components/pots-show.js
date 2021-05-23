import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost,deletePost } from '../actions';

class PostShow extends React.Component{

    componentDidMount(){
        this.props.fetchPost(this.props.currentPostId);
    }

    onDeleteClick=()=>{
        this.props.deletePost(this.props.currentPostId,()=>{this.props.history.push('/')});
    }

    render(){
        const {post} = this.props;
        if(!post)
            return <div>Loading...</div>
        return(
            <div>
                <Link to="/">Back To Index</Link>
                <button  onClick={this.onDeleteClick} className="btn btn-danger pull-xs-right">Delete</button>
                <h3>{post.title}</h3>
                <h6>Post Categories:{post.title}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return {
        post : state.posts[parseInt(ownProps.match.params.id)],
        currentPostId : parseInt(ownProps.match.params.id)
    }
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);
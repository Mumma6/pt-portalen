import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../utils/Spinner";
import PostItem from "../forum/PostItem";
import { getPost } from "../../actions/forum";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";


const Post = (props: any) => {
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, []);

  return (
    <div>
      {props.forum.loading || props.forum.post === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {props.auth.isAuthenticated }
          <Link to="/posts" className="btn">
            Gå tillbaka
          </Link>
          <PostItem post={props.forum.post} showActions={false} />
          <CommentForm postId={props.forum.post._id} />
          <div className="comments">
            {props.forum.post.comments.map((comment: any) => (
              <CommentItem key={comment._id} comment={comment} postId={props.forum.post._id} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  
  forum: state.forum
  
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);

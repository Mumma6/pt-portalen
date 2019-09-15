import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/forum";
import Spinner from "../../utils/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";


const Posts = (props: any) => {
  useEffect(() => {
    props.getPosts();
  }, [props.getPosts]);

  return props.forum.loading ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Forum</h1>
    <p className="lead">
      <i className="fas fa-user"></i> Välkommen till forumet
    </p>
    <PostForm />
    <div className="posts">
      {props.forum.posts.map((post: any) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  </Fragment>
};

const mapStateToProps = (state: any) => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);

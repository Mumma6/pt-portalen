import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deletePost } from "../../actions/forum";


const PostItem = (props: any) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${props.post._id}`}>
          <h4>{props.post.name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{props.post.text}</p>
        <p className="post-date">
          skapad <Moment format="YYYY/MM/DD">{props.post.date}</Moment>
        </p>
        {props.showActions && (
          <Fragment>
            <Link to={`/post/${props.post._id}`} className="btn btn-primary">
              Diskussion{" "}
              <span>
                {props.post.comments.length > 0 && (
                  <span className="comment-count">
                    {props.post.comments.length}
                  </span>
                )}
              </span>
            </Link>
            {!props.auth.loading && props.post.user === props.auth.user._id && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e: any) => props.deletePost(props.post._id)}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);

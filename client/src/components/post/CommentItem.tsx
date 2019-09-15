import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/forum";
import auth from "../../reducers/auth";

const CommentItem = (props: any) => {
  return (
    <div className="post bg-white p-1 my-1">
      <Fragment>
        <div>
          <Link to={`/profile/${props.comment.user}`}>
            <h4>{props.comment.name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{props.comment.text}</p>
          <p className="post-date">
            <Moment format="YYYY/MM/DD">{props.comment.date}</Moment>
          </p>
          {!props.auth.loading && props.comment.user === props.auth.user._id && (
            <button
              onClick={(e: any) =>
                props.deleteComment(props.postId, props.comment._id)
              }
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);

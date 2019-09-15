import React, { useState } from 'react'
import { connect } from "react-redux";
import { addComment } from "../../actions/forum";


const CommentForm = (props: any) => {

  const [text, setText] = useState("");

  return (
    <div className="post-form">
        <div className="bg-primary p">
          <h3>Lämna en kommentar</h3>
        </div>
        <form className="form my-1" onSubmit={(e :any) => {
          e.preventDefault();
          props.addComment(props.postId, { text });
          setText("")
        }}>
          <textarea
            name="text"
            cols={30}
            rows={5}
            placeholder="Skriv här..."
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Lägg till" />
        </form>
      </div>
  )
}

export default connect(null, { addComment })(CommentForm);

import React from "react";

export default function PostDetail(props) {
  return (
    <>
      {props.post != null && (
        <div className="post card " >
          <div>
            <span className="card-title">Post Detail Information</span>
          </div>
          <div className="col s12 m5">
            <div className="card-panel  ">
              <div>
                <h3>{props.post.title}</h3>
              </div>
              <div>
                <h5>{props.post.author}</h5>
              </div>
              <div>
                <div className="review center">
                <p>{props.post.content}</p>
                </div>
               
              </div>
            </div>
            <div className="card-action">
            <button 
            onClick={()=>props.deleteHandler(props.post.id)}
            // onClick={()=>{}}
             class="
              btn-floating
              halfway-fab waves-effect
              waves-light red">
                <i class="material-icons">delete</i>
            </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
}

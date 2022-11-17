import React from "react";

export default function PostDetail(props) {
  return (
    <>
      {props.post != null && (
        <div className="post" >
          <div className="col s12 m5">
            <div className="card-panel  ">
              <div>
                <h3>{props.post.title}</h3>
              </div>
              <div>
                <h5>{props.post.author}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

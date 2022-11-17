import React from "react";
import './post.css'


export default function Post(props) {
  // console.log(props.post)
  // const [post,onClick] = {props}

  const changeActivePost = (post) =>console.log(post)

  return (
    <div className="post" onClick={()=>props.clickHandler(props.post)}>
        <div className="col s12 m5">
          <div className="card-panel  ">
            <div><h3>{props.post.title}</h3></div>
            <div><h5>{props.post.author}</h5></div>
     </div>
        </div>
      </div>
  );
}

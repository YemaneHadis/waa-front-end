import React from "react";


import './post.css'
export default function Post(probs) {
  return (
    <div className="post">
        <div class="col s12  m5">
          <div class="card-panel  ">
            <div><h3>{probs.post.title}</h3></div>
            <div><h5>{probs.post.author}</h5></div>
   </div>
        </div>
      </div>
  );
}

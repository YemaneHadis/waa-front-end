// import React from 'react'
// import Post from './Post'

// export default function Posts(probs) {
//   const posts =  probs.posts.map(post => {
//     return <Post
//       id={post.id}
//       title={post.title}
//       author= {post.author}
//     />
//   })
//   return (
//       posts
//   )
// }

import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
  render() {
   const postList = this.props.post.map(post =>{
    return <Post
        post  = {post}
    />
   })
    return postList;
      
      // <div>Posts</div>
  
  }
}

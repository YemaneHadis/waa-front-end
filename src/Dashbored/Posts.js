
import React, { Component } from 'react'
import Post from './Post'




export default function Posts(props) {
  
  const postList = props.post.map(post =>{
    return <Post
        post  = {post}
        clickHandler = {props.changeActivePost}
        
    />
   })   

   return postList

}


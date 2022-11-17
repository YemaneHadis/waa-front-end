import { React, useState,useEffect } from "react";
import Posts from "./Posts";

import "materialize-css/dist/css/materialize.min.css";

import AddPost from "./CreatePost";
import PostDetail from "./PostDetail";

import axios from 'axios';
export default function Dashbored() {
  const createPost = (newPost) => 
  {
    axios.post('http://localhost:8080/api/v1/posts/',{
      title:newPost.title,
      author:newPost.author,
      content:newPost.content,
    }).then((response)=>{
     let posts =[...post,newPost];
     setPost(posts)
    }).catch(err =>{
        console.log(err.message);
    })
  };

  const changeActivePost = (post) =>{
    setActivePost(post);
   
  } 
  const deleteHandler = (id) =>{
    // console.log("dlksdksldks")
    // console.log("id" +"dlksldkslkd",id)
    axios.delete("http://localhost:8080/api/v1/posts/" + id)
    .then(response =>{
      let remainPost = post.filter((post) =>post.id != id)
      setPost(remainPost)
      setActivePost(null)
    })
  }

  const [post, setPost] = useState([
    { id: 111, title: "Happiness", author: "Jhone",review:["It is very good post ", "I am feeling happy"] },
    { id: 112, title: "MIU", author: "Dean",review:["The post from MIU dean ): ", "WAA is good course"] },
    { id: 113, title: "Enjoy Life", author: "Jasmin",review:[" Life is short enjoy today" , "Life is wonderfull around there"] },
  ]);
  const fetchPosts = () =>{
    axios.get('http://localhost:8080/api/v1/posts')
      .then(response =>{
        // console.log(response.data)
        setPost(response.data)
      })
      .catch(err=>{
        console.log(err.message)
      })
  }
  useEffect(() => {
    fetchPosts()
  },[]);
  

  
  const [activePost, setActivePost] = useState(null);
  return (
    <>
      <Posts       post={post} changeActivePost={changeActivePost}/>
      <AddPost     createPost={createPost} />
      <PostDetail  post={activePost} deleteHandler={deleteHandler}/>
    </>
  );
}

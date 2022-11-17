import { React, useState } from "react";
import Posts from "./Posts";

import "materialize-css/dist/css/materialize.min.css";

import ChangeTitle from "./ChangeTitle";
import PostDetail from "./PostDetail";

export default function Dashbored() {
  const changeTitle = (title) => {
    let newPost = post.slice();
    newPost[0].title = title;
    setPost(newPost);
  };

  const changeActivePost = (post) =>{
    setActivePost(post);
    console.log(post.title)
    console.log("Abrjha");
  } 
  

  const [post, setPost] = useState([
    { id: 111, title: "Happiness", author: "Jhone" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmin" },
  ]);
  const [activePost, setActivePost] = useState(null);
  return (
    <>
      <Posts post={post} changeActivePost={changeActivePost}/>
      <ChangeTitle changeTitle={changeTitle} />
      <PostDetail  post={activePost}/>
    </>
  );
}

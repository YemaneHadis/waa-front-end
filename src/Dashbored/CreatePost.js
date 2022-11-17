import { React, useRef } from "react";



export default function CreatePost(props) {
  const newProductForm = useRef();

  const changeNameClicked = () => {
    const form = newProductForm.current;
    const post = {
      title: form["title"].value,
      content:form["content"].value,
      author: form["author"].value
    };
    props.createPost(post)
  };
  return (
    <div className="container">
      <form ref={newProductForm}>
        <div className="center">
          <i className="material-icons md-48">change</i>
          <h6 className="center"> Chnage Name </h6>
        </div>

        <label>Title</label>
        <input type="text" label={"title"} name={"title"} />
        <label>Author</label>
        <input type="text" label={"author"} name={"author"} />
        <label>Content</label>
        <input type="text" label={"content"} name={"content"} />
      </form>

      <div className="center">
        <button
          className="btn waves-effect waves-light "
          onClick={changeNameClicked}
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

import { React, useRef } from "react";

export default function NewPost() {
  const newProductForm = useRef();

  const addButtonClicked = () => {
    const form = newProductForm.current;
    const data = {
      name: form["name"].value,
      price: form["price"].value,
    };
  };
  return (
    <div className="NewPost container">
      <form ref={newProductForm}>

        
          <div className="center">
            <i class="material-icons md-48">add</i>
            <h6 className="center"> Add Post </h6>
          </div>
        

        <label>Title</label>
        <input type="text" label={"name"} name={"name"} />

        <label>Author</label>
        <input type="text" label={"price"} name={"price"} />
      </form>

     
      <button class="btn waves-effect waves-light" onClick={addButtonClicked}  name="action">
        Submit
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
}

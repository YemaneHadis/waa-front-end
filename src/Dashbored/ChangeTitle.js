import { React, useRef } from "react";



export default function ChangeTitle(props) {
  const newProductForm = useRef();

  const changeNameClicked = () => {
    const form = newProductForm.current;
    const data = {
      title: form["changename"].value,
      
    
    };
    // console.log(props)
    props.changeTitle(data.title)
  };
  return (
    <div className="container">
      <form ref={newProductForm}>
        <div className="center">
          <i className="material-icons md-48">change</i>
          <h6 className="center"> Chnage Name </h6>
        </div>

        <label>ChangeName</label>
        <input type="text" label={"changename"} name={"changename"} />
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

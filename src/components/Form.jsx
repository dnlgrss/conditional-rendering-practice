import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered ? (
        ""
      ) : (
        <input type="password" placeholder="Confirm Password" />
      )}

      <Button isRegistered={props.isRegistered} />
    </form>
  );
}

export default Form;

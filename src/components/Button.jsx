import React from "react";

function Button(props) {
  return (
    <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
  );
}

export default Button;

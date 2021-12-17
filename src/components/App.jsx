import React from "react";
import Form from "./Form";

var userIsRegistered = false;

//Passing usierIsRegistered value as props so that can be read in form fisrt then button component
function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

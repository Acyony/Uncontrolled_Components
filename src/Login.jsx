import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";

//-----=^.^-=----- Creating a form using function and ref()
export default function Login() {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const spanRef = React.useRef();

  function checkValues(e) {
    e.preventDefault();
    if (!usernameRef.current.value) {
      spanRef.current.innerText = "Username missing";
      usernameRef.current.focus();
      return;
    }
    if (!passwordRef.current.value) {
      spanRef.current.innerText = "Password missing";
      passwordRef.current.focus();
      return;
    }
    alert(`Welcome ${usernameRef.current.value}`);
  }

  return (
    <div>
      <div className="container">
      <p className="p_CheckValues">Form Handling using function component</p>
        <Form className="form" onSubmit={checkValues} sm="10">
          <Form.Group className="m-1">
            <Form.Control
              className="mb-3"
              ref={usernameRef}
              type="text"
              name="username"
            />
            <Form.Control
              className="mb-3"
              ref={passwordRef}
              type="text"
              name="password"
            />
            <button className="button"  type="submit">
              Login
            </button>
          </Form.Group>
        </Form>
        <span className="span_style" ref={spanRef}></span>
      </div>
    </div>
  );
}

//-----=^.^-=----- Creating a form using class and ref()

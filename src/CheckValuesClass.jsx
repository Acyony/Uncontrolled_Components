import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./CheckValuesClass.css";

//-----=^.^-=----- Creating a form using class and ref()

export default class CheckValuesClass extends Component {
  formRef = React.createRef();
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  spanRef = React.createRef();

  state = {};

  checkValues = (e) => {
    e.preventDefault();
    if (!this.usernameRef.current.value) {
      this.spanRef.current.innerText = "Username missing";
      this.usernameRef.current.focus();
      return;
    }
    if (!this.passwordRef.current.value) {
      this.spanRef.current.innerText = "Password missing";
      this.passwordRef.current.focus();
      return;
    }
    alert(`Welcome ${this.usernameRef.current.value}`);
  };

  render() {
    return (
      <div>
        <div className="container  container_CheckValuesClass">
          <p className="p_CheckValuesClass">Form Handling using class component</p>
          <Form
            className="form_CheckValuesClass"
            onSubmit={this.checkValues}
            sm="10"
            ref={this.formRef}
          >
            <Form.Group className="m-1">
              <Form.Control
                className="mb-3"
                type="text"
                name="username"
                ref={this.usernameRef}
              />
              <Form.Control
                className="mb-3"
                type="text"
                name="password"
                ref={this.passwordRef}
              />
              <button className="button_CheckValuesClass" type="submit">
                Login
              </button>
            </Form.Group>
          </Form>
          <span className="span_CheckValuesClass" ref={this.spanRef}></span>
        </div>
      </div>
    );
  }
}

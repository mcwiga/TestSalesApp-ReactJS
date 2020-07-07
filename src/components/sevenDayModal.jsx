import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm"

class SignUpModal extends Component {
  state = {};

  render() {
    if (!this.props.type){
    return (
      <>
        <Modal show={this.props.showForm} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterForm handleClose={this.props.onClose}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  else{
    return (
      <>
        <Modal show={this.props.showForm} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm handleClose={this.props.onClose}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
}

export default SignUpModal;

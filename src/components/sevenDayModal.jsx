import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./RegisterForm";

class SignUpModal extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={this.props.showForm} onHide={this.props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm />
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

export default SignUpModal;

import GetBaseUrl from "../conf";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CreateUser({ reloadUserList }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onSubmission(event) {
    event.preventDefault();

    var fullName = event.target.elements.fullName.value;
    var email = event.target.elements.email.value;
    console.log(fullName);
    console.log(email);

    const apiEndpoint = GetBaseUrl() + "/api/users/";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        reloadUserList();
        handleClose();
      });
  }
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmission}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter fullname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create user
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

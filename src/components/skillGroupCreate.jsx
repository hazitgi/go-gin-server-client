import GetBaseUrl from "../conf";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CreateSkillGroup({ reloadList }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onSubmission(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;

    const apiEndpoint = GetBaseUrl() + "/api/skill-groups/";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        reloadList();
        handleClose();
      });
  }
  return (
    <>
      <br />
      <Button variant="outline-success" onClick={handleShow}>
        Create Group
      </Button>
      <br />
      <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmission}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter group name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Group
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

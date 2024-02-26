import GetBaseUrl from "../conf";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateUser({ reloadUserList }) {
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
      });
  }
  return (
    <div>
      <h3>Create User</h3>
      <br />
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
          Submit
        </Button>
      </Form>
    </div>
  );
}

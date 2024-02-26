import { useEffect } from "react";
import { useState } from "react";
import GetBaseUrl from "../conf";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AddCompetence({ userId, handleUserReload }) {
  console.log(userId);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [skillList, setSkillListData] = useState([]);

  const rankList = [
    {
      id: 1,
      name: "Beginner",
    },
    {
      id: 2,
      name: "Intermediate",
    },
    {
      id: 3,
      name: "Expert",
    },
  ];

  function onSubmission(event) {
    event.preventDefault();

    var skill = event.target.elements.skill.value;
    var rank = event.target.elements.rank.value;
    console.log(skill);
    console.log(rank);

    const apiEndpoint = GetBaseUrl() + "/api/users/" + userId + "/skills";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        skill: parseInt(skill),
        rank: parseInt(rank),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleUserReload();
        handleClose();
      });
  }

  function refreshSkillList() {
    const apiEndPoint = GetBaseUrl() + "/api/skills/";
    fetch(apiEndPoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSkillListData(data);
      });
  }

  useEffect(() => {
    refreshSkillList();
  }, []);

  return (
    <>
      <br />
      <Button variant="outline-success" onClick={handleShow}>
        Add new
      </Button>
      <br />
      <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmission}>
            <Form.Group className="mb-3" controlId="skill">
              <Form.Select aria-label="Default select example">
                <option id="skill">Select Skill</option>
                {skillList.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rank">
              <Form.Select aria-label="Default select example">
                <option id="rank">Select Rank</option>
                {rankList.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
              Add Competence
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

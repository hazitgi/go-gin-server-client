import UserDetail from "../components/userDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";
import UserCompetence from "../components/userCompetence";
import { useState } from "react";

export default function UserDetailPage() {
  const [reloadUserState, setUserReload] = useState(false);

  function handleUserReload() {
    setUserReload(true);
  }

  function reloadCompleted() {
    setUserReload(false);
  }
  return (
    <Container fluid>
      <PageHeadder pageName="User Detail"></PageHeadder>
      <Row>
        <Col>
          <UserDetail />
        </Col>
      </Row>
      <Row>
        <Col>
          <UserCompetence
            reloadUserState={reloadUserState}
            handleUserReload={handleUserReload}
            reloadCompleted={reloadCompleted}
          />
        </Col>
      </Row>
    </Container>
  );
}

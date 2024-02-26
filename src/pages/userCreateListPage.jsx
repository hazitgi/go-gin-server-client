import UserList from "../components/userList";
import CreateUser from "../components/userCreate";
import PageHeadder from "../components/pageHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function UserCreateListPage() {
  const [reloadUserListState, setUserReload] = useState(false);

  function handleUserListReload() {
    setUserReload(true);
  }

  function reloadCompleted() {
    setUserReload(false);
  }

  return (
    <Container>
      <PageHeadder pageName="Users"> </PageHeadder>
      <Row>
        <Col>
          <CreateUser reloadUserList={handleUserListReload} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <UserList
              reloadState={reloadUserListState}
              userListReloadComplete={reloadCompleted}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

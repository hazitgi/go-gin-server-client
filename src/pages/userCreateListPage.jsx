import UserList from "../components/userList";
import GlobalNavbar from "../components/navbar";
import CreateUser from "../components/userCreate";
import BreadCrumb from "../components/breadcrumb";

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
      <Row>
        <Col>
          <GlobalNavbar />
        </Col>
        <Col>
          <BreadCrumb subPage="Users" />
        </Col>
      </Row>
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

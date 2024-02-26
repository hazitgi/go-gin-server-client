import BreadCrumb from "../components/breadcrumb";
import GlobalNavbar from "../components/navbar";
import UserDetail from "../components/userDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UserDetailPage() {
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
          <UserDetail />
        </Col>
      </Row>
    </Container>
  );
}

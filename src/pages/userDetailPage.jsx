import UserDetail from "../components/userDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";

export default function UserDetailPage() {
  return (
    <Container>
      <PageHeadder pageName="User Detail"></PageHeadder>
      <Row>
        <Col>
          <UserDetail />
        </Col>
      </Row>
    </Container>
  );
}

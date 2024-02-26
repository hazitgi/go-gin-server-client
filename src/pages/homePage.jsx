import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container fluid>
      <PageHeadder pageName="Dashboard"> </PageHeadder>
      <Row>
        <Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Users</Card.Title>
                <Card.Text>
                  Create, Update or delete users from the user management page.
                </Card.Text>
                <Link
                  to={`/users`}
                  class="breadcrumb-item active"
                  aria-current="page"
                >
                  <Button variant="primary">Manage Users</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

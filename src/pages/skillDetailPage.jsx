import BreadCrumb from "../components/breadcrumb";
import GlobalNavbar from "../components/navbar";
import SkillDetail from "../components/skillDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SkillDetailPage() {
  return (
    <Container>
      <Row>
        <Col>
          <GlobalNavbar />
        </Col>
        <Col>
          <BreadCrumb subPage="Skill update" />
        </Col>
      </Row>
      <Row>
        <Col>
          <SkillDetail />
        </Col>
      </Row>
    </Container>
  );
}

import SkillDetail from "../components/skillDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";

export default function SkillDetailPage() {
  return (
    <Container>
      <PageHeadder pageName="Skill Group Detail"></PageHeadder>
      <Row>
        <Col>
          <SkillDetail />
        </Col>
      </Row>
    </Container>
  );
}

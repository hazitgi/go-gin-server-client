import SkillGroupDetail from "../components/skillGroupDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";

function SkillGroupDetailPage() {
  return (
    <Container fluid>
      <PageHeadder pageName="Skill Group Detail"></PageHeadder>
      <Row>
        <Col>
          <SkillGroupDetail />
        </Col>
      </Row>
    </Container>
  );
}

export default SkillGroupDetailPage;

import BreadCrumb from "../components/breadcrumb";
import GlobalNavbar from "../components/navbar";
import SkillGroupDetail from "../components/skillGroupDetail";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SkillGroupDetailPage() {
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
          <SkillGroupDetail />
        </Col>
      </Row>
    </Container>

    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col gap-3">
    //       <GlobalNavbar />
    //     </div>
    //   </div>

    //   <br />

    //   <BreadCrumb subPage="Skill Group" />

    //   <br />

    //   <div className="row align-items-center">
    //     <div className="col-4">
    //       <SkillGroupDetail />
    //     </div>
    //   </div>

    //   <br />
    // </div>
  );
}

export default SkillGroupDetailPage;

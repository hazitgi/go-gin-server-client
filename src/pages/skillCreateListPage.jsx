import GlobalNavbar from "../components/navbar";
import CreateSkill from "../components/skillCreate";
import { useState } from "react";
import SkillList from "../components/skillList";
import BreadCrumb from "../components/breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SkillsCreateListPage() {
  const [reloadSkillListState, setSkillReload] = useState(false);

  function handleSkillListReload() {
    setSkillReload(true);
  }

  function reloadCompleted() {
    setSkillReload(false);
  }

  return (
    <Container>
      <Row>
        <Col>
          <GlobalNavbar />
        </Col>
        <Col>
          <BreadCrumb subPage="Skill Groups" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateSkill reloadList={handleSkillListReload} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <SkillList
              reloadState={reloadSkillListState}
              skillListReloadComplete={reloadCompleted}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

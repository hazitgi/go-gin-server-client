import CreateSkill from "../components/skillCreate";
import { useState } from "react";
import SkillList from "../components/skillList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";

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
      <PageHeadder pageName="Skills"> </PageHeadder>
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

import { useState } from "react";
import CreateSkillGroup from "../components/skillGroupCreate";
import SkillGroupList from "../components/skillGroupList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeadder from "../components/pageHeader";

export default function SkillGroupCreateListPage() {
  const [reloadListState, setReload] = useState(false);

  function handleListReload() {
    setReload(true);
  }

  function reloadCompleted() {
    setReload(false);
  }

  return (
    <Container>
      <PageHeadder pageName="Skill Groups"> </PageHeadder>
      <Row>
        <Col>
          <CreateSkillGroup reloadList={handleListReload} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <SkillGroupList
              reloadState={reloadListState}
              listReloadComplete={reloadCompleted}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

import Navbar from "../components/navbar";
import CreateSkill from "../components/skillCreate";
import { useState } from "react";
import SkillList from "../components/skillList";
import BreadCrumb from "../components/breadcrumb";

export default function SkillsCreateListPage() {
  const [reloadSkillListState, setSkillReload] = useState(false);

  function handleSkillListReload() {
    setSkillReload(true);
  }

  function reloadCompleted() {
    setSkillReload(false);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <Navbar />
        </div>
      </div>

      <br />

      <BreadCrumb subPage="Skills" />

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <CreateSkill reloadList={handleSkillListReload} />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <SkillList
            reloadState={reloadSkillListState}
            skillListReloadComplete={reloadCompleted}
          />
        </div>
      </div>

      <br />
    </div>
  );
}

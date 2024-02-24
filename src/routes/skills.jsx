import Navbar from "../components/navbar";
import CreateSkill from "../components/skillCreate";
import { Link } from "react-router-dom";
import { useState } from "react";
import SkillList from "../components/skillList";

function SkillsPage() {
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

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link
              to={`/home`}
              class="breadcrumb-item active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li class="breadcrumb-item active">Skills</li>
        </ol>
      </nav>

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

export default SkillsPage;

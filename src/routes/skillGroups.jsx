import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateSkillGroup from "../components/skillGroupCreate";
import SkillGroupList from "../components/skillGroupList";

export default function SkillGroupPage() {
  const [reloadListState, setReload] = useState(false);

  function handleListReload() {
    setReload(true);
  }

  function reloadCompleted() {
    setReload(false);
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
          <li class="breadcrumb-item active">Skill Groups</li>
        </ol>
      </nav>

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <CreateSkillGroup reloadList={handleListReload} />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <SkillGroupList
            reloadState={reloadListState}
            listReloadComplete={reloadCompleted}
          />
        </div>
      </div>

      <br />
    </div>
  );
}

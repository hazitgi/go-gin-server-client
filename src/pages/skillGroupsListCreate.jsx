import GlobalNavbar from "../components/navbar";
import { useState } from "react";
import CreateSkillGroup from "../components/skillGroupCreate";
import SkillGroupList from "../components/skillGroupList";
import BreadCrumb from "../components/breadcrumb";

export default function SkillGroupCreateListPage() {
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
          <GlobalNavbar />
        </div>
      </div>

      <br />

      <BreadCrumb subPage="Skill Groups" />

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

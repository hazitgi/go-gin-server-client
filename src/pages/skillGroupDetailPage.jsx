import BreadCrumb from "../components/breadcrumb";
import GlobalNavbar from "../components/navbar";
import SkillGroupDetail from "../components/skillGroupDetail";

function SkillGroupDetailPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <GlobalNavbar />
        </div>
      </div>

      <br />

      <BreadCrumb subPage="Skill Group" />

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <SkillGroupDetail />
        </div>
      </div>

      <br />
    </div>
  );
}

export default SkillGroupDetailPage;

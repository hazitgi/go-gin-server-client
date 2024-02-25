import BreadCrumb from "../components/breadcrumb";
import Navbar from "../components/navbar";
import SkillDetail from "../components/skillDetail";

export default function SkillDetailPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <Navbar />
        </div>
      </div>

      <br />

      <BreadCrumb subPage="Skill Details" />

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <SkillDetail />
        </div>
      </div>

      <br />
    </div>
  );
}

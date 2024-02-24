import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import SkillDetail from "../components/skillDetail";
import SkillGroupDetail from "../components/skillGroupDetail";
import SkillGroupPage from "./skillGroups";

function SkillGroupDetailPage() {
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
          <li class="breadcrumb-item active">Skill Group</li>
        </ol>
      </nav>

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

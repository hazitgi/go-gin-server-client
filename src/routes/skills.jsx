import Navbar from "../components/navbar";
import SkillList from "../components/skillList";
import CreateSkill from "../components/skillCreate";
import { Link } from "react-router-dom";

function SkillPage() {
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
          <Link to={`/home`} class="breadcrumb-item active" aria-current="page">
            Home
          </Link>
          <li class="breadcrumb-item active">Skills</li>
        </ol>
      </nav>

      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <CreateSkill />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <SkillList />
        </div>
      </div>

      <br />
    </div>
  );
}

export default SkillPage;

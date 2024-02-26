import BreadCrumb from "../components/breadcrumb";
import GlobalNavbar from "../components/navbar";
import UserDetail from "../components/userDetail";

export default function UserDetailPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <GlobalNavbar />
        </div>
      </div>

      <br />
      <BreadCrumb subPage="Users" />
      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <UserDetail />
        </div>
      </div>

      <br />
    </div>
  );
}

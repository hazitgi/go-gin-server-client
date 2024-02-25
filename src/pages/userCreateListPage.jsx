import UserList from "../components/userList";
import Navbar from "../components/navbar";
import CreateUser from "../components/userCreate";
import BreadCrumb from "../components/breadcrumb";
import { useState } from "react";

export default function UserCreateListPage() {
  const [reloadUserListState, setUserReload] = useState(false);

  function handleUserListReload() {
    setUserReload(true);
  }

  function reloadCompleted() {
    setUserReload(false);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <Navbar />
        </div>
      </div>

      <br />
      <BreadCrumb subPage="Users" />
      <br />

      <div className="row align-items-center">
        <div className="col-4">
          <CreateUser reloadUserList={handleUserListReload} />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col">
          <UserList
            reloadState={reloadUserListState}
            userListReloadComplete={reloadCompleted}
          />
        </div>
      </div>

      <br />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import User from "./user";

export default function UserList({ reloadState, userListReloadComplete }) {
  const [data, setData] = useState([]);

  function handleUserListRefresh(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/users/";
    fetch(apiEndPoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  useEffect(() => {
    handleUserListRefresh(null);
    userListReloadComplete();
  }, [reloadState, userListReloadComplete]);

  return (
    <div>
      <br />
      <h3>Users</h3>
      <hr />

      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <User
              id={item.id}
              fullName={item.fullName}
              email={item.email}
              competence={item.competence}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import User from "./user";
import axiosInstance from "../api";

export default function UserList({ reloadState, userListReloadComplete }) {
  const [data, setData] = useState([]);

  function handleUserListRefresh(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/users/";
    axiosInstance({
      url: "/api/users",
      method: "GET",
    }).then((response) => {
      const { data } = response?.["data"];
      console.log(data, ">>>>>>>>>>>>>>>");
      setData(data);
    });
  }

  useEffect(() => {
    handleUserListRefresh(null);
    userListReloadComplete();
  }, [reloadState, userListReloadComplete]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <User
                key={item.id}
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

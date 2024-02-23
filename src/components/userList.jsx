import React, { useState, useEffect } from "react";
import GetBaseUrl from "./conf";
import User from "./user";

export default function UserList() {
  const [data, setData] = useState([]);

  function reloadUserList(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/users/";
    fetch(apiEndPoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        // alert(JSON.stringify(data));
      });
  }

  useEffect(() => {
    console.log("effects");
    reloadUserList(null);
  }, []);

  return (
    <div>
      <br />
      <h3>
        Users
        <button
          type="simpleQuery"
          className="btn btn-sm btn-link"
          onClick={reloadUserList}
        >
          Refresh table
        </button>
      </h3>
      <br />

      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <User id={item.id} fullName={item.fullName} email={item.email} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

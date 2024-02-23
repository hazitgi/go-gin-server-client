import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GetBaseUrl from "./conf";

export default function UserDetail() {
  const [data, setData] = useState([]);
  const { userId } = useParams();
  const apiEndPoint = GetBaseUrl() + "/api/users/" + userId + "/";

  console.log("UserDetailApi: ", apiEndPoint);

  function updateUser(event) {
    event.preventDefault();

    var fullName = event.target.elements.fullName.value;
    var email = event.target.elements.email.value;
    console.log(fullName);
    console.log(email);

    fetch(apiEndPoint, {
      method: "PATCH",
      body: JSON.stringify({
        fullName: fullName,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      });
  }

  function deleteUser(event) {
    event.preventDefault();
    console.log("Deleting user...");
    fetch(apiEndPoint, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      });
  }

  useEffect(() => {
    function getUserDetails() {
      console.log("get user detail");
      fetch(apiEndPoint, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }

    getUserDetails();
  }, [apiEndPoint]);

  return (
    <div>
      <h3>User Details : {data.fullName}</h3>
      <br />
      <form onSubmit={updateUser}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            defaultValue={data.fullName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            defaultValue={data.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <span style={{ marginLeft: "10px" }}></span>
        <button type="submit" className="btn btn-danger" onClick={deleteUser}>
          Delete user
        </button>
      </form>
      <br />
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetBaseUrl from "../conf";
import axiosInstance from "../api";

export default function UserDetail(s) {
  const { userId } = useParams();

  const [data, setData] = useState([]);
  const apiEndPoint = GetBaseUrl() + "/api/users/" + userId;

  const navigate = useNavigate();

  console.log("UserDetailApi: ", apiEndPoint);

  function updateUser(event) {
    event.preventDefault();

    var fullName = event.target.elements.fullName.value;
    var email = event.target.elements.email.value;
    console.log(fullName);
    console.log(email);
    axiosInstance({
      url: "/api/users/" + userId,
      method: "PATCH",
      data: JSON.stringify({
        fullName: fullName,
        email: email,
      }),
    }).then((response) => {
      const { data } = response?.["data"];
      console.log(data);
      navigate("/users");
    });
  }

  function deleteUser(event) {
    event.preventDefault();
    console.log("Deleting user...");
    axiosInstance({
      url: "/api/users/" + userId,
      method: "DELETE",
    }).then((response) => {
      const { data } = response?.["data"];
      console.log(data);
      navigate("/users");
    });
  }

  useEffect(() => {
    function getUserDetails() {
      console.log("get user detail");
      axiosInstance({
        url: "/api/users/" + userId,
        method: "GET",
      }).then((response) => {
        const { data } = response?.["data"];
        console.log(data);
        setData(data);
      });
    }

    getUserDetails();
  }, [apiEndPoint]);

  return (
    <div>
      <h3>{data.fullName}</h3>
      <hr />
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

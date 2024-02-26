import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GetBaseUrl from "../conf";

export default function SkillGroupDetail() {
  const [data, setData] = useState([]);
  const { groupId } = useParams();
  const apiEndPoint = GetBaseUrl() + "/api/skill-groups/" + groupId + "/";

  const navigate = useNavigate();

  function updateSkill(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;

    fetch(apiEndPoint, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // alert(JSON.stringify(data));
        navigate("/skill-groups");
      });
  }

  function deleteSill(event) {
    event.preventDefault();
    console.log("Deleting skill...");
    fetch(apiEndPoint, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // alert(JSON.stringify(data));
        navigate("/skill-groups");
      });
  }

  useEffect(() => {
    function getSkillDetails() {
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

    getSkillDetails();
  }, [apiEndPoint]);

  return (
    <div>
      <h3>Skill Group : {data.name}</h3>
      <br />
      <form onSubmit={updateSkill}>
        <div className="mb-3">
          <label className="form-label"> Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue={data.name}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <span style={{ marginLeft: "10px" }}></span>
        <button type="submit" className="btn btn-danger" onClick={deleteSill}>
          Delete
        </button>
      </form>
      <br />
    </div>
  );
}

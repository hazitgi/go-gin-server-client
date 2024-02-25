import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GetBaseUrl from "../conf";

export default function SkillDetail() {
  const [data, setData] = useState([]);
  const { skillId } = useParams();
  const [skillGroups, setSkillGroups] = useState([]);

  function loadGroupLists(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/skill-groups/";
    fetch(apiEndPoint, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSkillGroups(data);
      });
  }
  const apiEndPoint = GetBaseUrl() + "/api/skills/" + skillId + "/";

  const navigate = useNavigate();

  function updateSkill(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;
    var group = event.target.elements.group.value;

    fetch(apiEndPoint, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        group: group,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
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
        alert(JSON.stringify(data));
        navigate("/skills");
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

    loadGroupLists(null);

    getSkillDetails();
  }, [apiEndPoint]);

  return (
    <div>
      <h3>Skill Details : {data.name}</h3>
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
        <div className="mb-3">
          <label className="form-label">Group</label>
          <select id="group" className="form-control">
            <option selected>Select.</option>
            {skillGroups.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
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

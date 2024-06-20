import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import axiosInstance from "../api";

export default function SkillDetail() {
  const [data, setData] = useState([]);
  const { skillId } = useParams();
  const [skillGroups, setSkillGroups] = useState([]);

  function loadGroupLists(event) {
    console.log(event);
    axiosInstance.get("/api/skill-groups").then((response) => {
      const { data } = response?.["data"];
      console.log(data);

      setSkillGroups(data);
    });
  }
  const apiEndPoint = GetBaseUrl() + "/api/skills/" + skillId;

  const navigate = useNavigate();

  function updateSkill(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;
    var group = event.target.elements.group.value;

    axiosInstance
      .post(
        "/api/skills/" + skillId,
        JSON.stringify({
          name: name,
          group: group,
        })
      )
      .then((response) => {
        const { data } = response?.["data"];
        console.log(data);
        // alert(JSON.stringify(data));
        navigate("/skills");
      });
  }

  function deleteSill(event) {
    event.preventDefault();
    console.log("Deleting skill...");
    axiosInstance.delete("/api/skills/" + skillId).then((response) => {
      const { data } = response?.["data"];
      console.log(data);
      // alert(JSON.stringify(data));
      navigate("/skills");
    });
  }

  useEffect(() => {
    function getSkillDetails() {
      axiosInstance.get("/api/skills/" + skillId).then((response) => {
        const { data } = response?.["data"];
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
          <select id="group" className="form-control" defaultValue={data.id}>
            <option selected value={data.skillGroup ? data.skillGroup.id : ""}>
              {data.skillGroup ? data.skillGroup.name : "select"}
            </option>
            {skillGroups &&
              skillGroups.map((item) => (
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

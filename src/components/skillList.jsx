import React, { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import Skill from "./skill";

export default function SkillList({ reloadState, skillListReloadComplete }) {
  const [data, setData] = useState([]);

  function handleListRefresh(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/skills/";
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
    handleListRefresh(null);
    skillListReloadComplete();
  }, [reloadState, skillListReloadComplete]);

  return (
    <div>
      <br />
      <h3>Skills</h3>
      <br />

      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Group</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Skill id={item.id} name={item.name} group="group name" />
          ))}
        </tbody>
      </table>
    </div>
  );
}

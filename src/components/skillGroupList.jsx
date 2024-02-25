import React, { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import SkillGroup from "./skillGroup";

export default function SkillGroupList({ reloadState, listReloadComplete }) {
  const [data, setData] = useState([]);

  function handleListRefresh(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/skill-groups/";
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
    listReloadComplete();
  }, [reloadState, listReloadComplete]);

  return (
    <div>
      <br />
      <h3>Skill Groups</h3>
      <hr />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <SkillGroup id={item.id} name={item.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

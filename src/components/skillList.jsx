import React, { useState, useEffect } from "react";
import GetBaseUrl from "../conf";
import Skill from "./skill";
import axiosInstance from "../api";

export default function SkillList({ reloadState, skillListReloadComplete }) {
  const [data, setData] = useState([]);

  function handleListRefresh(event) {
    console.log(event);
    const apiEndPoint = GetBaseUrl() + "/api/skills/";
    axiosInstance({
      url: "/api/skills",
      method: "GET",
    }).then((response) => {
      const { data } = response?.["data"];
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
      <hr />

      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Group</th>
          </tr>
        </thead>
        <tbody>
          {
            (data &&
            data.map((item) => (
              <Skill
                key={item.id}
                id={item.id}
                name={item.name}
                group={item?.skillGroup?.name}
              />
            )))
          }
        </tbody>
      </table>
    </div>
  );
}

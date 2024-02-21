import React, { useState } from 'react';
import Skill from "./skill";

export default function SkillList() {

  const [data, setData] = useState([]);

  function reloadUserList(event) {
    console.log(event);
    fetch("https://skills.buildfromzero.com/api/users", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
        // alert(JSON.stringify(data));
      })
  };

  return (
    <div>
      <br />
      <h3>Skill List</h3>
      <br />
      <button type="simpleQuery" className="btn btn-dark" onClick={reloadUserList}>Reload Skill List</button>
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <Skill id={item.id} fullName={item.name} />
            ))
          }
        </tbody>
      </table>
    </div>


  );
}
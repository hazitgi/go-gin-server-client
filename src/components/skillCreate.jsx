import { useEffect } from "react";
import { useState } from "react";
import GetBaseUrl from "../conf";

export default function CreateSkill({ reloadList }) {
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

  function onSubmission(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;
    var group = event.target.elements.group.value;
    console.log(name);
    console.log(group);

    const apiEndpoint = GetBaseUrl() + "/api/skills/";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        group: group,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        reloadList();
      });
  }

  useEffect(() => {
    loadGroupLists(null);
  }, []);

  return (
    <div>
      <h3>Create Skill</h3>
      <br />
      <form onSubmit={onSubmission}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
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
          Submit
        </button>
      </form>
    </div>
  );
}

import GetBaseUrl from "../conf";

export default function CreateSkillGroup({ reloadList }) {
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
  return (
    <div>
      <h3>Create Skill Group</h3>
      <br />
      <form onSubmit={onSubmission}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Group</label>
          <input type="text" className="form-control" id="group" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

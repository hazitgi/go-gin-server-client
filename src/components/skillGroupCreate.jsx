import GetBaseUrl from "../conf";

export default function CreateSkillGroup({ reloadList }) {
  function onSubmission(event) {
    event.preventDefault();

    var name = event.target.elements.name.value;

    const apiEndpoint = GetBaseUrl() + "/api/skill-groups/";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify({
        name: name,
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

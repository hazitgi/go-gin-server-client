import GetBaseUrl from "../conf";

export default function CreateSkill() {
  function onSubmission(event) {
    event.preventDefault();

    var skillName = event.target.elements.skillName.value;
    console.log(skillName);

    const apiEndPoint = GetBaseUrl() + "/api/skills";
    fetch(apiEndPoint, {
      method: "POST",
      body: JSON.stringify({
        skillName: skillName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      });
  }
  return (
    <div>
      <h3>Create Skill</h3>
      <br />
      <form onSubmit={onSubmission}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="skillName" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

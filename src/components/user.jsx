import { Link } from "react-router-dom";

export default function User({ id, fullName, email, competence }) {
  console.log("User: ", id, fullName, email, competence);
  function GetStyle(rank) {
    if (rank === 1) {
      return "text-bg-danger";
    }

    if (rank === 2) {
      return "text-bg-primary";
    }

    if (rank === 3) {
      return "text-bg-success";
    }
    return "text-bg-primary";
  }
  return (
    <tr>
      <th scope="row">
        <Link to={`/users/${id}`}>{id}</Link>
      </th>
      <td>
        <Link to={`/users/${id}`}>{fullName}</Link>
      </td>
      <td>{email}</td>
      <td>
        {competence && competence.map((item) => (
          <span className={`badge rounded-pill ${GetStyle(item.rank)}`}>
            {item.skill.name}
          </span>
        ))}
      </td>
    </tr>
  );
}

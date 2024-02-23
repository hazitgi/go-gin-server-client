import { Link } from "react-router-dom";

export default function User({ id, fullName, email, competence }) {
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
        {competence.map((item) => (
          <span class={`badge rounded-pill ${GetStyle(item.rank)}`}>
            {item.skill.name}
          </span>
        ))}

        {/* <span class="badge rounded-pill text-bg-secondary">Python</span>
        <span class="badge rounded-pill text-bg-success">Rust</span>
        <span class="badge rounded-pill text-bg-danger">C</span> */}
      </td>
    </tr>
  );
}

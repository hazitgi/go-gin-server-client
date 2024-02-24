import { Link } from "react-router-dom";

export default function Skill({ id, name, group }) {
  return (
    <tr>
      <th scope="row">
        <Link to={`/skills/${id}`}>{id}</Link>
      </th>
      <td>
        <Link to={`/skills/${id}`}>{name}</Link>
      </td>
      <td>{group}</td>
    </tr>
  );
}

import { Link } from "react-router-dom";

export default function SkillGroup({ id, name }) {
  return (
    <tr>
      <th scope="row">
        <Link to={`/skill-groups/${id}`}>{id}</Link>
      </th>
      <td>
        <Link to={`/skill-groups/${id}`}>{name}</Link>
      </td>
    </tr>
  );
}

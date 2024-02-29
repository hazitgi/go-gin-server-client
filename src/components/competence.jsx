export default function CompetenceComponent({ id, skill, skillGroup, rank }) {
  console.log(id);
  return (
    <tr>
      <td>{skill}</td>
      <td>{rank}</td>
      <td>{skillGroup}</td>
      <td>Edit</td>
    </tr>
  );
}

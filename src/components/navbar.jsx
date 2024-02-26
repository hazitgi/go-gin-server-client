import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function GlobalNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="#home">BFZ</Navbar.Brand>
      <Nav className="me-auto">
        <Link to={`/home`} class="nav-link">
          Home
        </Link>
        <Link to={`/users`} class="nav-link">
          Users
        </Link>
        <Link to={`/skills`} class="nav-link">
          Skills
        </Link>
        <Link to={`/skill-groups`} class="nav-link">
          Groups
        </Link>
        <Link to={`/login`} class="nav-link">
          Logout
        </Link>
      </Nav>
    </Navbar>
  );
}

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function GlobalNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="#home">BFZ</Navbar.Brand>
      <Nav className="me-auto">
        <Link to={`/home`} className="nav-link">
          Home
        </Link>
        <Link to={`/users`} className="nav-link">
          Users
        </Link>
        <Link to={`/skills`} className="nav-link">
          Skills
        </Link>
        <Link to={`/skill-groups`} className="nav-link">
          Groups
        </Link>
        <Link to={`/login`} className="nav-link">
          Logout
        </Link>
      </Nav>
    </Navbar>
  );
}

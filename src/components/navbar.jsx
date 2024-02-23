import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Skill Map
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 mb-2 me-auto">
            <li class="nav-item">
              <Link to={`/home`} class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={`/users`} class="nav-link">
                Users
              </Link>
            </li>

            <li class="nav-item">
              <Link to={`/skills`} class="nav-link">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link to={`/login`} class="nav-link">
                Logout
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

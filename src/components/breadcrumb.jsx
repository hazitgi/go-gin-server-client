import { Link } from "react-router-dom";

export default function BreadCrumb({ subPage }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to={`/home`} class="breadcrumb-item active" aria-current="page">
            Home
          </Link>
        </li>
        <li class="breadcrumb-item active">{subPage}</li>
      </ol>
    </nav>
  );
}

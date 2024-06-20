import { Link } from "react-router-dom";

export default function BreadCrumb({ subPage }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={`/home`} className="breadcrumb-item active" aria-current="page">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item active">{subPage}</li>
      </ol>
    </nav>
  );
}

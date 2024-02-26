import { Link, useRouteError } from "react-router-dom";
import GlobalNavbar from "../components/navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col gap-3">
          <GlobalNavbar />
        </div>
      </div>

      <br />

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <Link to={`/home`} class="breadcrumb-item active" aria-current="page">
            Home
          </Link>
        </ol>
      </nav>

      <br />

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <br />
    </div>
  );
}

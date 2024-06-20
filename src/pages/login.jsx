import "./login.css";
import { useNavigate } from "react-router-dom";
function UserLogin() {
  const navigate = useNavigate();
  function handleLogin(event) {
    console.log("login");
    navigate("/home");
  }
  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 fw-normal mb-3">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              defaultValue="demo@example.com"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              defaultValue="admin"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check my-3 text-start">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-primary w-100 py-2"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className="text-body-secondary mb-3 mt-5">&copy; 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default UserLogin;

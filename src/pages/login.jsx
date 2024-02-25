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
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 fw-normal mb-3">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              defaultValue="demo@example.com"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            ></input>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              defaultValue="admin"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            ></input>
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check my-3 text-start">
            <input
              class="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            ></input>
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button
            class="btn btn-primary w-100 py-2"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p class="text-body-secondary mb-3 mt-5">&copy; 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default UserLogin;

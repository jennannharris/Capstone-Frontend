import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  // A3 Run login form submission function
  const loginFormSubmitted = async (evt) => {
    evt.preventDefault();

    // A4 Make fetch request to backend
    const loginResponse = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // A5 Include the typed in email and password from form
      body: JSON.stringify({ email, password }),
      // A6 Also include the credentials between the browser and server
      credentials: "include",
    });
    const loginData = await loginResponse.json();
    if (loginData.error) {
      alert(loginData.error);
    } else {
      // A13: The user is authenticated according to the backend, take them to the post editor
      navigateTo("/animalEditor");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginFormSubmitted}>
        <div className="form-label">
          <div class="row" id="info">
            <div class="col-3" id="text">
              Email:
              <input type="text" id="text" placeholder="Email Address" />
            </div>
          </div>
          <input
            type="email"
            className="form-control"
            onChange={(evt) => {
              // A1: Updates typed in value in state
              setEmail(evt.target.value);
            }}
            value={email}
          />

          <div class="row" id="info">
            <div class="col-3" id="text">
              Password:
              <input type="text" id="text" placeholder="Email Address" />
            </div>
          </div>
          <input
            type="password"
            className="form-control"
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
            value={password}
          />

          <div class="row" id="row">
            <div class="Submit text-center" id="submit">
              <input type="submit" />
              <Link to="/Administrator" input type="email" />
              <Link to="/Post" input type="email" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

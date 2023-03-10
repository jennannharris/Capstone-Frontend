import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(`http://localhost:3001/authStatus`, {
        credentials: "include",
      });
      const data = await response.json();
      setLoggedIn(data.loggedIn);
    };
    checkAuth();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className="row" id="homeImg">
        <div className="row"></div>
        <div className="col-3">
          <img src="images/dog4.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src="images/dog1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src="images/dog2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-3">
          <img src="images/dog3.jpg" className="img-fluid" alt="" />
        </div>
        <div className="row"></div>
      </div>
      <div class="row">
        <div>
          <div class="col-6" id="signUpLog">
            Sign Up to Join Our Community
          </div>

          <div class="row col-2" id="submit">
            <Link className="nav-link" to="/SignUp">
              <button type="submit" id="button">
                Sign Up
              </button>
            </Link>
          </div>

          {loggedIn ? null : (
            <div class="col-8" id="signUpLog">
              Log In
            </div>
          )}

          <div class="row col-2" id="submit">
            <Link className="nav-link" to="/LogIn">
              <button type="submit" id="button">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
//I'm not sure what I'm linking to if a user is logged in.
//Are they going to Post to add animals?
//Do they need to have an Post Editor?

export default Home;

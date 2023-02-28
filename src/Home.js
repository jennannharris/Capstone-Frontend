import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [animalsInState, setAnimalsInState] = useState([]);

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
      <div className="row" id="row">
        <div className="row"></div>
        <div className="col-3">
          <img src="images/dog4.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="images/dog1.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="images/dog2.jpg" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="images/dog3.jpg" className="img-fluid" />
        </div>
        <div className="row"></div>
      </div>
      <div class="row">
        <div>
          <div class="col-6" id="signUpLog">
            Sign Up to Join Our Community
          </div>

          <div class="row col-2" id="submit">
            <a href="signUp.html">
              <button type="submit" id="button">
                Submit
              </button>
            </a>
          </div>

          <div class="col-8" id="signUpLog">
            Log In
          </div>

          <div class="row col-2" id="submit">
            <a href="Login.html">
              <button type="submit" id="button">
                Submit
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        {animalsInState.map((animal) => {
          return <></>;
          return (
            <div className="col-4" key={animal.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
                  {/* <div>By: {animal.user.firstName}</div> */}
                  <h6>
                    {new Date(animal.createdAt).toLocaleDateString()}{" "}
                    {new Date(animal.createdAt).toLocaleTimeString()}
                  </h6>

                  <p className="card-text">{animal.describedAs}</p>
                  <Link
                    to={`/animalInfo/${animal.id}`}
                    className="btn btn-primary"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//I'm not sure what I'm linking to if a user is logged in.
//Are they going to Animal Info to add animals?
//Do they need to have an Animal Editor?

export default Home;

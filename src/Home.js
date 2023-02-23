import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [animalsInState, setAnimalsInState] = useState([
   
  ]);

  
  useEffect(() => {
    const makeAPICall = async () => {
      const animalsResponse = await fetch(`http://localhost:3001/posts`);
      const animalsData = await animalsResponse.json();
      console.log(animalsData);
      setAnimalsInState(animalsData.posts);
    };
    makeAPICall();
  }, []);

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
      <div className="row">
        {animalsInState.map((animal) => {
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
      {loggedIn ? (
        //Are they logged in? If yes, show them the Post Editor link.
        <Link to="/animalEditor">Animal Editor</Link>
      ) : (
        //If they aren't logged in, show them link to do so.
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};
//I'm not sure what I'm linking to if a user is logged in.
//Are they going to Animal Info to add animals?
//Do they need to have an Animal Editor?

export default Home;

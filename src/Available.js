import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Available = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      const animalsResponse = await fetch(`http://localhost:3001/posts`);
      const animalsData = await animalsResponse.json();
      console.log(animalsData);
      setAnimals(animalsData.posts);
    };
    makeAPICall();
  }, []);

  const images = ["dog1", "dog2", "dog3", "dog4"];

  const pickRandomDog = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="container">
      <h1>Available</h1>
      <div className="row">
        {animals.map((animal) => {
          return (
            <div className="col-4" id="card" key={animal.id}>
              <div className="card">
                <img
                  src={`/images/${pickRandomDog()}.jpg`}
                  className="card-img-top"
                  alt="Adopt Me!"
                />
                <div className="card-body">
                  <h1>{animal.name}</h1>
                  <p>{animal.type}</p>
                  <p>{animal.age}</p>
                  <p>{animal.describedAs}</p>

                  <div>
                    <Link to="/Available" className="btn btn-primary">
                      Learn More!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Available;

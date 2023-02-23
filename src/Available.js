import { useState } from "react";
import { Link } from "react-router-dom";

const Available = () => {
  const [animals, setAnimals] = useState([
    { name: "", type: "", age: "", describedAs: "" },
  ]);

  return (
    <div>
      <h1>Home</h1>
      {animals.map((animal) => {
        return (
          <div id="card">
            <div className="card">
              <img src="X" className="card-img-top" alt="Adopt Me!">
                <div className="card-body">
                  <h1>{animal.name}</h1>
                  <p>{animal.type}</p>
                  <p>{animal.age}</p>
                  <p>{animal.describedAs}</p>

                  <div>
                    <h5 className="card-title">Adopt Me!</h5>
                    <p className="card-text">Animals for Adoption</p>
                    <Link to="/Available" className="btn btn-primary">
                      Learn More!
                    </Link>
                  </div>
                </div>
              </img>
            </div>
          </div>
        );
      })}
    </div>
  );
};




export default Available;

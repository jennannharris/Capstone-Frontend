import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div class="container-fluid">
      <div class="row" id="row">
        <div class="Apply text-center" id="heading">
          Application
        </div>
      </div>

      <div class="row" id="info">
        <div class="col-9" id="text">
          Name:
          <input type="text" placeholder="First" />
          <input type="text" placeholder="Middle Initial" />
          <input type="text" placeholder="Last" />
        </div>

        <div class="col-9" id="text">
          Date of Birth:
          <input type="text" placeholder="xx/xx/xxxx" />
        </div>

        <div class="col-9" id="text">
          Phone Number:
          <input type="text" placeholder="Home" />
          <input type="text" placeholder="Mobile" />
        </div>

        <div class="col-9" id="text">
          Address:
        </div>
      </div>

      <div class="row" id="info">
        <div class="col-3" id="text">
          <input type="text" id="text" placeholder="Box or Street" />
        </div>

        <div class="col-3">
          <input type="text" id="text" placeholder="City" />
        </div>

        <div class="col-3">
          <input type="text" id="text" placeholder="State" />
        </div>

        <div class="col-2">
          <input type="text" id="text" placeholder="Zip Code" />
        </div>
      </div>

      <div class="row" id="info">
        <div class="col-3" id="text">
          Email:
          <input type="text" id="text" placeholder="Email Address" />
        </div>
      </div>

      <div class="row" id="info">
        <div class="col-3" id="text">
          Family Composition
        </div>
      </div>
      <div class="row" id="info">
        <div class="col-2" id="text">
          Are there children in the home?
        </div>
        <div class="col-8" id="text">
          Yes
          <input type="checkbox" />
          No
          <input type="checkbox" />
          If so, how many?
          <input type="text" />
          What ages?
          <input type="text" />
        </div>
      </div>

      <div class="row" id="info">
        <div class="col-2" id="text">
          Are there children in the home?
        </div>
        <div class="col-8" id="text">
          Yes
          <input type="checkbox" />
          No
          <input type="checkbox" />
          If so, how many?
          <input type="text" />
          What ages?
          <input type="text" />
        </div>
      </div>
      <div class="row" id="info">
        <div class="col-6" id="text">
          What is the dwelling type?
          <input type="text" placeholder="House/Apartment/Studio..." />
        </div>
        <div class="col-4" id="text">
          Are there stairs?
          <input type="text" placeholder="Y/N" />
        </div>
      </div>
      <div class="row" id="info">
        <div class="col-3" id="text">
          What type of area do you live in?
          <input type="text" placeholder="City/Suburbs/Country..." />
        </div>
        <div class="col-3" id="text">
          Do you have a yard?
          <input type="text" placeholder="Y/N" />
        </div>
        <div class="col-6" id="text">
          What is the area like for walks?
          <input
            type="text-box"
            id="textBox"
            placeholder="A lot of sidewalks/many parks..."
          />
        </div>

        <div class="col-6" id="text">
          What else do you want us to know?
          <input type="text-box" id="textBox" placeholder="Tell us more!" />
        </div>
      </div>
      <div class="row" id="row">
        <div class="Submit text-center" id="submit">
          <input type="submit" />
          <Link to="/Administrator" input type="email" />
          <Link to="/User" input type="email" />
        </div>
      </div>
    </div>
  );
};

export default Application;

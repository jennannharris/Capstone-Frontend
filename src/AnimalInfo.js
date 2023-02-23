import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//I don't know how to leave this info here to put HTML on the page
//or if this all gets erased and replaced
//with const params/const navigateTo...like Post.js
const AnimalInfo = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="row">
        <div className="ViewerInfo text-center" id="heading">
          Animal Information
        </div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Animal:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Name:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Breed:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Age:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Description:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">Suggested Fee:</div>
      </div>

      <div className="row" id="text">
        <div className="col-3">Brief Medical History:</div>
      </div>

      <div className="row" id="text">
        <div className="col-1">My Story:</div>
      </div>
      <div className="row" id="text">
        <div className="col-1">
          Apply!
          <input type="submit" id="submit" />
          <Link to="/application" />
        </div>
      </div>
      <div className="row" id="text">
        <div className="col-1">
          Connect with the Owner Email address of the aboutOwner
          <input type="submit" id="submit" />
        </div>
      </div>
    </div>
  );
};

export default AnimalInfo;

import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/LogIn">
              Log In
            </Link>
            <Link className="nav-link" to="/SignUp">
              Sign Up
            </Link>
            <Link className="nav-link" to="/About">
              About
            </Link>
            <Link className="nav-link" to="/Available">
              Available for Adoption
            </Link>
            <Link className="nav-link" to="/AnimalInfo">
              Animal Information
            </Link>
            <Link className="nav-link" to="/Application">
              Application
            </Link>
            <Link className="nav-link" to="/Donation">
              Donate
            </Link>
            <Link className="nav-link" to="/Contact">
              Contact Us!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

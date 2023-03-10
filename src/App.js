import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import About from "./About";
import Available from "./Available";
import Post from "./Post";
import PostEditor from "./PostEditor";
import Application from "./Application";
import Donation from "./Donation";
import Contact from "./Contact";
import Administrator from "./Administrator";
import Nav from "./Nav";
import Structure from "./Structure";

function App() {
  return (
    <div className="route">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Structure />}>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            {/* <Route path="/User" element={<User />} /> */}
            <Route path="/Administrator" element={<Administrator />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/About" element={<About />} />
            <Route path="/Available" element={<Available />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/Application" element={<Application />} />
            <Route path="/Donation" element={<Donation />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AnimalEditor" element={<PostEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
